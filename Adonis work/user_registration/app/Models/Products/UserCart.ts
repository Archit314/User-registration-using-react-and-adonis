import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class UserCart extends BaseModel {
  @column({ isPrimary: true })
  public id: string

  @column({columnName: 'user_id'})
  public userId: string

  @column({columnName: 'cart_status'})
  public cartStatus: string

  @column({columnName: 'cart_total_amount'})
  public cartTotalAmount: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
