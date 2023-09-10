"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Category_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Products/Category"));
const CategoryProductItem_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Products/CategoryProductItem"));
const Logger_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Logger"));
const uuid = require("uuid");
const Database_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Lucid/Database"));
class productItemService {
    async productAdd(category, categoryProduct, item, itemPrice, itemQuantity) {
        try {
            let response = await Database_1.default.transaction(async (trx) => {
                let newCategory = new Category_1.default();
                newCategory.id = uuid.v4();
                newCategory.category = category;
                newCategory.categoryProduct = categoryProduct;
                newCategory.useTransaction(trx);
                await newCategory.save();
                Logger_1.default.info("Category added successfully.");
                let newItem = new CategoryProductItem_1.default();
                newItem.id = uuid.v4();
                newItem.categoryId = newCategory.id;
                newItem.item = item;
                newItem.itemPrice = itemPrice;
                newItem.itemQuantity = itemQuantity;
                newItem.useTransaction(trx);
                await newItem.save();
                Logger_1.default.info("Product item added successfully.");
                return true;
            });
            return response;
        }
        catch (error) {
            Logger_1.default.error(error);
            throw new error({ error: error });
        }
    }
    async createItem(selectedCategoryProduct, itemName, itemPrice, itemQuantity) {
        const categoryProductId = await Category_1.default.query().select('id').where('category_product', selectedCategoryProduct).first();
        if (!categoryProductId) {
            Logger_1.default.error(`Cannot find category product id for product ${selectedCategoryProduct}`);
            return false;
        }
        const newItem = new CategoryProductItem_1.default();
        newItem.id = uuid.v4();
        newItem.categoryId = categoryProductId.id;
        newItem.item = itemName;
        newItem.itemPrice = itemPrice;
        newItem.itemQuantity = itemQuantity;
        await newItem.save();
        Logger_1.default.info(`New item added successfully for product id ${categoryProductId}`);
        return newItem;
    }
}
exports.default = productItemService;
//# sourceMappingURL=ProductItemService.js.map