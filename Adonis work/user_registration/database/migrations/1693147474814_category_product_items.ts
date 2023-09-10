import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'category_product_items'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.uuid('id').primary()

      table.string('category_id').references('id').inTable('categories').notNullable()
      table.string('item').notNullable()
      table.string('item_image_url').nullable()
      table.string('additional_image_url').nullable()
      table.float('item_price').notNullable()
      table.string('item_quantity').notNullable()

      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
