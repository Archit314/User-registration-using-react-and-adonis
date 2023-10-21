import { DateTime } from 'luxon'
import { column, BaseModel } from '@ioc:Adonis/Lucid/Orm'

export default class User extends BaseModel {
  @column({ isPrimary: true })
  public id: string

  @column({ columnName: 'name' })
  public name: string

  @column({ columnName: 'user_name' })
  public userName: string

  @column({ columnName: 'mobile_number' })
  public mobileNumber: string

  @column()
  public email: string

  @column({ serializeAs: null })
  public password: string

  @column({columnName: 'status'})
  public status: boolean

  @column()
  public rememberMeToken: string | null

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

}
