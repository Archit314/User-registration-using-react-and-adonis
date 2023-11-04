import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import CategoryProductItem from 'App/Models/Products/CategoryProductItem'
import UserCart from 'App/Models/Products/UserCart'
import UserCartItem from 'App/Models/Products/UserCartItem'
import User from 'App/Models/User'
import CartService from 'App/Services/Product/CartService'
const UserCartStatus = require('App/Enum/UserCartStatus')
import { schema } from '@ioc:Adonis/Core/Validator'

export default class CartsController {
    public async addToCart(ctx: HttpContextContract){
        
        const {request, response} = ctx
        const {productItemId} = request.all()

        const authorizedUser = await User.find(ctx.userAuthInfo.id)  
        // return authorizedUser?.id      
    
        if(!authorizedUser)return response.status(401).send({status: 401, message: `Unauthorized user!`})
        
        try{

            const productItem = await CategoryProductItem.query().where('id', productItemId).first()
            if(!productItem)return response.status(422).send({status: 422, message: `Product item not found.`})
            
            let userCart:any = await UserCart.query().where('user_id', authorizedUser.id).where('cart_status', "1").orderBy('created_at', 'desc').first()

            const cartService = new CartService()
            if(!userCart){
                let userNewCart = await cartService.createUserCart(authorizedUser)
                if(!userNewCart){
                    return response.status(422).send({status: 422, message: `Failed to create new cart for user.`})
                }
                userCart = userNewCart
            }

            const addedItem = await cartService.addItemToCart(productItem, userCart)

            if(!addedItem){
                return response.status(422).send({status: 422, message: `Failed to add item to user cart.`})
            }

            return response.status(200).send({status: 200, message: `Item added to cart successfully.`, addedItem})

        }catch(error){
            throw error
        }

    }

    public async getUserCart(ctx: HttpContextContract){
        const {response} = ctx

        const authorizedUser = await User.find(ctx.userAuthInfo.id)

        if(!authorizedUser){
            return response.status(422).send({status: 422, message: `User is not authorized.`})
        }

        const userCart = await UserCart.query().where('user_id', authorizedUser.id).where('cart_status', UserCartStatus.Inprogress).preload('userCartItem', (query) => {
            query.preload('item')
        }).orderBy('created_at', 'desc').first()

        if(!userCart){
            return response.status(422).send({status: 422, message: `User cart is empty.`})
        }

        return response.status(200).send({status: 200, message: `Cart item fetch successfully`, data: userCart})
    }

    public async removeCartItem(ctx: HttpContextContract){

        const {request, response} = ctx

        const {cartItemId} = request.all()

        const cartItem = await UserCartItem.query().where('id', cartItemId).first()

        if(!cartItem){
            return response.status(422).send({status: 422, message: `Cart item not found!`})
        }

        await cartItem.delete()
        
        return response.status(200).send({status: 200, message: `Item removed from cart successfully.`})
    }

    // Method to update the cart item like its quantity 
    public async updateCartItemQuantity(ctx: HttpContextContract){
        const {request, response} = ctx

        await request.validate({
            schema: schema.create({
                quantity: schema.string(),
                cartItemId: schema.string()
            }),
            messages: {
                'quantity.required': `Quantity is required.`,
                'cartItemId.required': `Cart item id is required.`
            }
        })

        const {cartItemId, quantity} = request.all()

        let cartItem = await UserCartItem.query().where('id', cartItemId).preload('item').first()
        

        if(!cartItem){
            return response.status(422).send({status: 422, message: `Cart item not found.`})
        }

        let cartItemCal = await this.cartItemCalculation(cartItem, quantity)

        if(!cartItemCal){
            return response.status(422).send({status: 422, message: `Failed to update the cart item`})
        }

        cartItem.quantity = quantity
        cartItem.totalAmount = cartItemCal.newTotalAmount

        await cartItem.save()

        return response.status(200).send({status: 200, message: `Cart item updated successfully.`, data: cartItem})
    }

    // Calculation for the quantity and total amount of the cart item
    async cartItemCalculation(cartItem: UserCartItem, quantity){

        let productPrice = cartItem.item.itemPrice
        let newTotalAmount = (productPrice * quantity)

        return {
            newTotalAmount: newTotalAmount,
            productPrice: productPrice
        }
    }
}
