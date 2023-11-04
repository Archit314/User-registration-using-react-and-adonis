/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return { hello: 'world' }
})

// API for user
Route.group(() => {

  Route.post('/sign-up', 'UsersController.userRegistration')
  Route.post('/sign-in', 'UsersController.userLogin')
}).prefix('user')

Route.group(() => {
  Route.group(() => {
    Route.post('/add-to/cart', 'Product/CartsController.addToCart')
    Route.get('/cart/item', 'Product/CartsController.getUserCart')
    Route.post('/cart-item/remove', 'Product/CartsController.removeCartItem')
    Route.post('/cart-item/update', 'Product/CartsController.updateCartItemQuantity')
  }).middleware('userAuth')
}).prefix('v1/user')

Route.get('/navbar/category', 'Product/ProductsController.getNavbarCategory')
Route.post('/category-product/all', 'Product/ProductsController.fetchCategoryProduct')
Route.post('/product-item/all', 'Product/ProductsController.itemAll')
Route.post('/product-item/listing', 'Product/ProductsController.itemListing')