import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Category from './Category'

export default class CategoryProductItem extends BaseModel {
  @column({ isPrimary: true })
  public id: string

  @column({columnName: 'category_id'})
  public categoryId: string

  @column({columnName: 'item'})
  public item: string

  @column({columnName: 'item_image_url'})
  public itemImageUrl: string

  @column({columnName: 'additional_image_url'})
  public additionalImageUrl: string

  @column({columnName: 'item_price'})
  public itemPrice: number

  @column({columnName: 'item_quantity'})
  public itemQuantity: string

  @belongsTo(() => Category,{
    foreignKey: 'categoryId'
  })
  public Category: BelongsTo<typeof Category>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
