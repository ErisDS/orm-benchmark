import { ApplicationContract } from '@ioc:Adonis/Core/Application'
import Config from '@ioc:Adonis/Core/Config'

const { Model } = require('objection')
const Knex = require('knex')

class Address extends Model {
  public static get tableName () {
    return 'addresses'
  }
}

class Email extends Model {
  public static get tableName () {
    return 'emails'
  }
}

class Phone extends Model {
  public static get tableName () {
    return 'phones'
  }
}

class Contact extends Model {
  public static get tableName () {
    return 'contacts'
  }

  public static relationMappings = {
    emails: {
      relation: Model.HasManyRelation,
      modelClass: Email,
      join: {
        from: 'contacts.id',
        to: 'emails.contact_id',
      },
    },
    phones: {
      relation: Model.HasManyRelation,
      modelClass: Phone,
      join: {
        from: 'contacts.id',
        to: 'phones.contact_id',
      },
    },
    addresses: {
      relation: Model.HasManyRelation,
      modelClass: Address,
      join: {
        from: 'contacts.id',
        to: 'addresses.contact_id',
      },
    },
  }
}

export default class ObjectionProvider {
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
    Model.knex(knex)

    this.application.container.singleton('Objection/Contact', () => {
      return Contact
    })
  }
}
