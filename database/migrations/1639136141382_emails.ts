import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Emails extends BaseSchema {
  protected tableName = 'emails'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.uuid('uuid').unique()
      table.integer('contact_id').unsigned().index()
      table.string('account')

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
