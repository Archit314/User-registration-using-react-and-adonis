"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Category_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Products/Category"));
const CategoryProductItem_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Products/CategoryProductItem"));
class ProductsController {
    async getNavbarCategory(ctx) {
        const { response } = ctx;
        const navbarCategory = await Category_1.default.query().select('category').distinct();
        if (navbarCategory.length == 0)
            return response.status(422).send({ status: 422, message: `No category found` });
        let allNavbarCategories = [];
        await Promise.all(navbarCategory.map(async (singleNavbarCategory) => {
            await allNavbarCategories.push(singleNavbarCategory.category);
        }));
        return response.status(200).send({ status: 200, message: `Category fetch successfully`, data: allNavbarCategories });
    }
    async fetchCategoryProduct(ctx) {
        const { response, request } = ctx;
        const categoryName = request.input('categoryName');
        const items = await Category_1.default.query().select('category_product').where('category', categoryName).orderBy('created_at', 'desc');
        if (!items)
            return response.status(422).send({ status: 422, message: `No product found.`, data: [] });
        let itemsList = [];
        await Promise.all(items.map(async (singleItem) => {
            await itemsList.push(singleItem.categoryProduct);
        }));
        return response.status(200).send({ status: 200, message: `Product fetched successfully.`, data: itemsList });
    }
    async itemAll(ctx) {
        const { response, request } = ctx;
        const { categoryName } = request.all();
        const category = await Category_1.default.query().where('category', categoryName);
        if (category.length == 0) {
            return response.status(422).send({ status: 422, message: `Invalid category.` });
        }
        let allItems = [];
        await Promise.all(category.map(async (singleProduct) => {
            const productItems = await CategoryProductItem_1.default.query().where('category_id', singleProduct.id);
            if (productItems.length > 0) {
                await Promise.all(productItems.map(async (singleItems) => {
                    await allItems.push(singleItems);
                }));
            }
        }));
        return response.status(200).send({ status: 200, message: `Items fetched successfully.`, data: allItems });
    }
    async itemListing(ctx) {
        const { response, request } = ctx;
        const { productName } = request.all();
        const productItems = await Category_1.default.query().where('category_product', productName).preload('CategoryProductItem').first();
        if (!productItems)
            return response.status(422).send({ status: 422, message: `No item found.`, data: [] });
        return response.status(200).send({ status: 200, message: `Item found successfully`, data: productItems });
    }
}
exports.default = ProductsController;
//# sourceMappingURL=ProductsController.js.map