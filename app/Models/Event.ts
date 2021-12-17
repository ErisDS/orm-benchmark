import { DateTime } from 'luxon'
import { BaseModel, belongsTo, BelongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Contact from 'App/Models/Contact'

export default class Event extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public contactId: number

  @column()
  public type: String

  @column()
  public uuid: String

  @column()
  public data: String // jsonb

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => Contact)
  public user: BelongsTo<typeof Contact>
}
