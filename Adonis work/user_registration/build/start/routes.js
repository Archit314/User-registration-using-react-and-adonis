"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Route_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Route"));
Route_1.default.get('/', async () => {
    return { hello: 'world' };
});
Route_1.default.group(() => {
    Route_1.default.post('/sign-up', 'UsersController.userRegistration');
    Route_1.default.post('/sign-in', 'UsersController.userLogin');
}).prefix('user');
Route_1.default.get('/navbar/category', 'Product/ProductsController.getNavbarCategory');
Route_1.default.post('/category-product/all', 'Product/ProductsController.fetchCategoryProduct');
Route_1.default.post('/product-item/all', 'Product/ProductsController.itemAll');
Route_1.default.post('/product-item/listing', 'Product/ProductsController.itemListing');
//# sourceMappingURL=routes.js.map