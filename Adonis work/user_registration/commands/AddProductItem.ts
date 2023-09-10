import { BaseCommand } from '@adonisjs/core/build/standalone'
import Category from 'App/Models/Products/Category'
// import CategoryProductItem from 'App/Models/Products/CategoryProductItem'
import ProductItemService from 'App/Services/ProductItemService'

export default class AddProductItem extends BaseCommand {
  /**
   * Command name is used to run the command
   */
  public static commandName = 'add:product_item'

  /**
   * Command description is displayed in the "help" output
   */
  public static description = 'This command is used to insert the product item.'

  public static settings = {
    /**
     * Set the following value to true, if you want to load the application
     * before running the command. Don't forget to call `node ace generate:manifest` 
     * afterwards.
     */
    loadApp: true,

    /**
     * Set the following value to true, if you want this command to keep running until
     * you manually decide to exit the process. Don't forget to call 
     * `node ace generate:manifest` afterwards.
     */
    stayAlive: false,
  }

  public async run() {

    try{

      const newCategory = await this.prompt.ask("If you want to create a new category then press: Yes otherwise press: No")

      const productItemService = new ProductItemService()

      if((newCategory).toUpperCase() == "YES"){
        // new category will be formed
        console.log(`new category will be formed because your response is : ${newCategory}`);
        
        const category = await this.prompt.ask("Enter the category name.")
        const categoryProduct = await this.prompt.ask("Enter the category product name.")
        const item = await this.prompt.ask("Enter the category item name.")
        const itemPrice = await this.prompt.ask("Enter the item price.")
        const itemQuantity = await this.prompt.ask("Enter the item quantity.")

        const createdItem = await productItemService.productAdd(category, categoryProduct, item, itemPrice, itemQuantity)

        if(!createdItem){
          this.logger.error(`Failed to create item.`)
          return false
        }
        
      }
      else if((newCategory).toUpperCase() == "NO"){
        // no new category will be formed
        // console.log(`no new category will be formed because your response is: ${newCategory}`);

        // Fetching the existing category from the database
        const existCategories:any = await Category.query().select('category').distinct()
        let categoryList:any = []

        await Promise.all(
          existCategories.map(async (singleCategory) => {
            await categoryList.push(singleCategory.category)
          })
        )
      
        const selectedCategory = await this.prompt.choice("Select category", categoryList)
        // console.log(`Existing categories`, selectedCategory);

        const userAnswer = await this.prompt.ask("If you want to create a new product for category then press: Yes otherwise press: No")
        if((userAnswer).toUpperCase() == "YES"){
          // create new product
          const productName = await this.prompt.ask("Enter a product name")
          const itemName = await this.prompt.ask("Enter item name")
          const itemPrice = await this.prompt.ask("Enter item price.")
          const itemQuantity = await this.prompt.ask("Enter item quantity.")
          const createdItem = await productItemService.productAdd(selectedCategory, productName, itemName, itemPrice, itemQuantity)

          if(!createdItem){
            this.logger.error(`Failed to create item.`)
            return false
          }
        }
        else if((userAnswer).toUpperCase() == "NO"){
          // existing product
          const categoryProduct:any = await Category.query().select('category_product').where('category', selectedCategory)

          let existingCategoryProduct:any = []
          await Promise.all(
            categoryProduct.map(async (singleProduct) => {
              await existingCategoryProduct.push(singleProduct.categoryProduct)
            })
          )
          const selectedCategoryProduct = await this.prompt.choice('Select product for category', existingCategoryProduct)
          // console.log(`selected product`, selectedCategoryProduct);

          // Input for creating new item
          const itemName = await this.prompt.ask("Enter item name.")
          const itemPrice = await this.prompt.ask("Enter item price.")
          const itemQuantity = await this.prompt.ask("Enter item quantity.")
          // const itemImangeUrl = await this.prompt.ask("Enter item image url")
          // const itemImangeAlternateUrl = await this.prompt.ask("Enter item alternate image url")
          // console.log(`input values`, itemName, itemPrice, itemQuantity);
          

          // creating new item
          const addedProductItem = await productItemService.createItem(selectedCategoryProduct, itemName, itemPrice, itemQuantity)

          if(!addedProductItem){
            this.logger.error("Failed to add product item.")
            return false
          }

        }else{
          this.logger.warning("Invalid input.")
          return 
        }

      }else{
        this.logger.warning("Invalid input.")
        return 
      }

      
      this.logger.success("Command execute successfully.")
    }
    catch(e){
      this.logger.error(e)
    }
  }
}
