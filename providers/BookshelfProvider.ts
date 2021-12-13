import { ApplicationContract } from '@ioc:Adonis/Core/Application'
import Config from '@ioc:Adonis/Core/Config'

const Bookshelf = require('bookshelf')
const Knex = require('knex')

export default class BookshelfProvider {
  public static needsApplication = true

  constructor (protected application: ApplicationContract) {
  }

  private knexConfig () {
    const connection = Config.get('database.connection')
    const config = Config.get('database.connections.' + connection)
    return config
  }

  public register () {
    const knexConfig = this.knexConfig()
    const knex = Knex(knexConfig)
    const bookshelf = Bookshelf(knex)

    const Phone = bookshelf.model('Phone', {
      tableName: 'phones',
    })

    const Email = bookshelf.model('Email', {
      tableName: 'emails',
    })

    const Address= bookshelf.model('Address', {
      tableName: 'addresses',
    })

    const Contact = bookshelf.model('Contact', {
      tableName: 'contacts',
      emails () {
        return this.hasMany(Email)
      },
      phones () {
        return this.hasMany(Phone)
      },
      addresses () {
        return this.hasMany(Address)
      },
    })

    this.application.container.singleton('Bookshelf/Contact', () => {
      console.log('registered')
      return Contact
    })
  }
}
