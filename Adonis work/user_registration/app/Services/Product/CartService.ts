import UserCart from "App/Models/Products/UserCart";
import User from "App/Models/User";
const uuid = require("uuid");
const UserCartStatus = require('App/Enum/UserCartStatus')
import Logger from '@ioc:Adonis/Core/Logger'
import UserCartItem from "App/Models/Products/UserCartItem";
import CategoryProductItem from "App/Models/Products/CategoryProductItem";

export default class CartService{

    async createUserCart(user: User){

        let newCart = new UserCart()
        newCart.id = uuid.v4()
        newCart.userId = user.id
        newCart.cartStatus = String(UserCartStatus.Inprogress)
        newCart.cartTotalAmount = 0

        await newCart.save()

        Logger.info(`New cart for user id -> ${user.id} created successfully.`)
        return newCart
    }

    async addItemToCart(productItem: CategoryProductItem, userCart: UserCart){

        let newItem = new UserCartItem()
        newItem.id = uuid.v4()
        newItem.productItemId = productItem.id
        newItem.userCartId = userCart.id
        newItem.quantity = "1"
        newItem.totalAmount = productItem.itemPrice
        newItem.shippingCharges = 250.25

        await newItem.save()

        Logger.info(`Item added to user cart successfully: item id -> ${productItem.id} & cart item id -> ${newItem.id}`)
        return newItem
    }
}