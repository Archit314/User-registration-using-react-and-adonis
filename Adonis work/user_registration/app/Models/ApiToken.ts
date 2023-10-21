import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class ApiToken extends BaseModel {
  @column({ isPrimary: true })
  public id: string

  @column({columnName: 'user_id'})
  public userId: string

  @column({columnName: 'name'})
  public name: string

  @column({columnName: 'user_name'})
  public userName: string

  @column({columnName: 'email'})
  public email: string

  @column({columnName: 'token'})
  public token: string

  @column({serializeAs: null})
  public password: string

  @column({columnName: 'status'})
  public status: boolean

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({columnName: 'expires_at'})
  public expiresAt: DateTime

}
