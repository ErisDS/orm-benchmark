import { DateTime } from 'luxon'
import { BaseModel, beforeCreate, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Phone from 'App/Models/Phone'
import Address from 'App/Models/Address'
import Email from 'App/Models/Email'

export default class Contact extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: String

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasMany(() => Phone)
  public phones: HasMany<typeof Phone>

  @hasMany(() => Address)
  public addresses: HasMany<typeof Address>

  @hasMany(() => Email)
  public emails: HasMany<typeof Email>
}
