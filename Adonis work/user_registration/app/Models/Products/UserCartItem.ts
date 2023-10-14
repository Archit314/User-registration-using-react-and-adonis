import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

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
}
