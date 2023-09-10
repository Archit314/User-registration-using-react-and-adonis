import { DateTime } from 'luxon'
import { BaseModel, HasMany, column, hasMany } from '@ioc:Adonis/Lucid/Orm'
import CategoryProductItem from './CategoryProductItem'

export default class Category extends BaseModel {
  @column({ isPrimary: true })
  public id: string

  @column({columnName: 'category'})
  public category: string

  @column({columnName: 'category_product'})
  public categoryProduct: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasMany(() => CategoryProductItem, {
    foreignKey: 'categoryId'
  })
  public CategoryProductItem: HasMany<typeof CategoryProductItem>
}
