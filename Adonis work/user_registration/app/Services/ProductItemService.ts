import Category from "App/Models/Products/Category";
import CategoryProductItem from "App/Models/Products/CategoryProductItem";
import Logger from '@ioc:Adonis/Core/Logger'
const uuid = require("uuid");
// import { DateTime } from "luxon";
import Database from "@ioc:Adonis/Lucid/Database";

export default class productItemService{

    async productAdd(category, categoryProduct, item, itemPrice, itemQuantity){

        try{
            // Database transaction
            let response = await Database.transaction(async (trx) => {
                let newCategory = new Category()
                newCategory.id = uuid.v4()
                newCategory.category = category
                newCategory.categoryProduct = categoryProduct
    
                newCategory.useTransaction(trx)
                await newCategory.save()

                Logger.info("Category added successfully.")
    
                let newItem = new CategoryProductItem()
                newItem.id = uuid.v4()
                newItem.categoryId = newCategory.id
                newItem.item = item
                newItem.itemPrice = itemPrice
                newItem.itemQuantity = itemQuantity
    
                newItem.useTransaction(trx)
                await newItem.save()

                Logger.info("Product item added successfully.")

                return true
            })

            return response
            
        }catch(error){

            Logger.error(error)
            throw new error({error: error})
        }

    }

    // Creating a new item
    async createItem(selectedCategoryProduct: string, itemName, itemPrice, itemQuantity){

        const categoryProductId = await Category.query().select('id').where('category_product', selectedCategoryProduct).first()
        // console.log(categoryProductId);
        

        if(!categoryProductId){
            Logger.error(`Cannot find category product id for product ${selectedCategoryProduct}`)
            return false
        }

        const newItem = new CategoryProductItem()
        newItem.id = uuid.v4()
        newItem.categoryId = categoryProductId.id
        newItem.item = itemName
        newItem.itemPrice = itemPrice
        newItem.itemQuantity = itemQuantity

        await newItem.save()
        Logger.info(`New item added successfully for product id ${categoryProductId}`)

        return newItem
    }
}