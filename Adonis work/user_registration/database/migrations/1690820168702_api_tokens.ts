import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'api_tokens'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {

      table.uuid('id').primary()

      table.uuid('user_id').references('id').inTable('users').notNullable()
      table.string('name').notNullable()
      table.string('user_name').notNullable()
      table.string('email').notNullable()
      table.string('token', 64).notNullable().unique()
      table.string('password', 180).notNullable()
      table.boolean('status').defaultTo(true).notNullable()

      table.timestamp('expires_at', { useTz: true }).nullable()
      table.timestamp('created_at', { useTz: true }).notNullable()
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
