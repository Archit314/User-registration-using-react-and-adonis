import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import CategoryProductItem from 'App/Models/Products/CategoryProductItem'
import UserCart from 'App/Models/Products/UserCart'
import User from 'App/Models/User'
import CartService from 'App/Services/Product/CartService'

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
}
