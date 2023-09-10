"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const standalone_1 = require("@adonisjs/core/build/standalone");
const Category_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/Products/Category"));
const ProductItemService_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Services/ProductItemService"));
class AddProductItem extends standalone_1.BaseCommand {
    async run() {
        try {
            const newCategory = await this.prompt.ask("If you want to create a new category then press: Yes otherwise press: No");
            const productItemService = new ProductItemService_1.default();
            if ((newCategory).toUpperCase() == "YES") {
                console.log(`new category will be formed because your response is : ${newCategory}`);
                const category = await this.prompt.ask("Enter the category name.");
                const categoryProduct = await this.prompt.ask("Enter the category product name.");
                const item = await this.prompt.ask("Enter the category item name.");
                const itemPrice = await this.prompt.ask("Enter the item price.");
                const itemQuantity = await this.prompt.ask("Enter the item quantity.");
                const createdItem = await productItemService.productAdd(category, categoryProduct, item, itemPrice, itemQuantity);
                if (!createdItem) {
                    this.logger.error(`Failed to create item.`);
                    return false;
                }
            }
            else if ((newCategory).toUpperCase() == "NO") {
                const existCategories = await Category_1.default.query().select('category').distinct();
                let categoryList = [];
                await Promise.all(existCategories.map(async (singleCategory) => {
                    await categoryList.push(singleCategory.category);
                }));
                const selectedCategory = await this.prompt.choice("Select category", categoryList);
                const userAnswer = await this.prompt.ask("If you want to create a new product for category then press: Yes otherwise press: No");
                if ((userAnswer).toUpperCase() == "YES") {
                    const productName = await this.prompt.ask("Enter a product name");
                    const itemName = await this.prompt.ask("Enter item name");
                    const itemPrice = await this.prompt.ask("Enter item price.");
                    const itemQuantity = await this.prompt.ask("Enter item quantity.");
                    const createdItem = await productItemService.productAdd(selectedCategory, productName, itemName, itemPrice, itemQuantity);
                    if (!createdItem) {
                        this.logger.error(`Failed to create item.`);
                        return false;
                    }
                }
                else if ((userAnswer).toUpperCase() == "NO") {
                    const categoryProduct = await Category_1.default.query().select('category_product').where('category', selectedCategory);
                    let existingCategoryProduct = [];
                    await Promise.all(categoryProduct.map(async (singleProduct) => {
                        await existingCategoryProduct.push(singleProduct.categoryProduct);
                    }));
                    const selectedCategoryProduct = await this.prompt.choice('Select product for category', existingCategoryProduct);
                    const itemName = await this.prompt.ask("Enter item name.");
                    const itemPrice = await this.prompt.ask("Enter item price.");
                    const itemQuantity = await this.prompt.ask("Enter item quantity.");
                    const addedProductItem = await productItemService.createItem(selectedCategoryProduct, itemName, itemPrice, itemQuantity);
                    if (!addedProductItem) {
                        this.logger.error("Failed to add product item.");
                        return false;
                    }
                }
                else {
                    this.logger.warning("Invalid input.");
                    return;
                }
            }
            else {
                this.logger.warning("Invalid input.");
                return;
            }
            this.logger.success("Command execute successfully.");
        }
        catch (e) {
            this.logger.error(e);
        }
    }
}
exports.default = AddProductItem;
AddProductItem.commandName = 'add:product_item';
AddProductItem.description = 'This command is used to insert the product item.';
AddProductItem.settings = {
    loadApp: true,
    stayAlive: false,
};
//# sourceMappingURL=AddProductItem.js.map