import { DateTime } from 'luxon'
import { BaseModel, belongsTo, BelongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Contact from 'App/Models/Contact'

export default class Email extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public contactId: number

  @column()
  public account: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => Contact)
  public user: BelongsTo<typeof Contact>
}
