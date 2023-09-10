import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Category from 'App/Models/Products/Category'
import CategoryProductItem from 'App/Models/Products/CategoryProductItem'

export default class ProductsController {
    public async getNavbarCategory(ctx: HttpContextContract){

        const {response} = ctx

        const navbarCategory = await Category.query().select('category').distinct()

        if(navbarCategory.length == 0) return response.status(422).send({status: 422, message: `No category found`})

        let allNavbarCategories:any = []

        await Promise.all(
            navbarCategory.map(async (singleNavbarCategory) => {
                await allNavbarCategories.push(singleNavbarCategory.category)
            })
        )

        return response.status(200).send({status: 200, message: `Category fetch successfully`, data: allNavbarCategories})
    }

    public async fetchCategoryProduct(ctx: HttpContextContract){
        const {response, request} = ctx

        const categoryName = request.input('categoryName')

        const items = await Category.query().select('category_product').where('category', categoryName).orderBy('created_at', 'desc')

        if(!items) return response.status(422).send({status: 422, message: `No product found.`, data: []})

        let itemsList: any = []
        await Promise.all(
            items.map(async (singleItem) => {
                await itemsList.push(singleItem.categoryProduct)
            })
        )

        return response.status(200).send({status: 200, message: `Product fetched successfully.`, data: itemsList})
    }

    // Method to fetch all items based on the category
    public async itemAll(ctx: HttpContextContract){
        const {response, request} = ctx
        const {categoryName} = request.all()

        const category = await Category.query().where('category', categoryName)

        if(category.length == 0){
            return response.status(422).send({status: 422, message: `Invalid category.`})
        }

        let allItems:any= [];
        await Promise.all(
            category.map( async (singleProduct) => {
                const productItems = await CategoryProductItem.query().where('category_id', singleProduct.id)

                if(productItems.length >0){
                    await Promise.all(
                        productItems.map(async (singleItems) => {
                            await allItems.push(singleItems)
                        })
                    )
                }
            })
        )

        return response.status(200).send({status: 200, message: `Items fetched successfully.`, data: allItems})
    }

    // Method to fetch items when apply filter
    public async itemListing(ctx: HttpContextContract){
        const {response, request} = ctx 

        const {productName} = request.all()

        const productItems = await Category.query().where('category_product', productName).preload('CategoryProductItem').first()

        if(!productItems) return response.status(422).send({status: 422, message: `No item found.`, data: []})

        return response.status(200).send({status: 200, message: `Item found successfully`, data: productItems})
    }
}
