import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import CategoryProductItem from './CategoryProductItem'

export default class UserCartItem extends BaseModel {
  @column({ isPrimary: true })
  public id: string

  @column({columnName: 'product_item_id'})
  public productItemId: string

  @column({columnName: 'user_cart_id'})
  public userCartId: string

  @column({columnName: 'quantity'})
  public quantity: string

  @column({columnName: 'total_amount'})
  public totalAmount: number

  @column({columnName: 'shipping_charges'})
  public shippingCharges: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => CategoryProductItem, {
    foreignKey: 'productItemId'
  })
  public item: BelongsTo<typeof CategoryProductItem>
}
