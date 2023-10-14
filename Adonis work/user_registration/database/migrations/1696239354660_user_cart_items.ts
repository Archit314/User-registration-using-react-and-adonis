import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'user_cart_items'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.uuid('id').primary()

      table.uuid('product_item_id').references('id').inTable('category_product_items').notNullable()
      table.uuid('user_cart_id').references('id').inTable('user_carts').notNullable()
      table.string('quantity').notNullable()
      table.double('total_amount', 16,8).notNullable()
      table.double('shipping_charges', 16,8).notNullable()
      
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
