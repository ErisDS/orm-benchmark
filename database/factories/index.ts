import Factory from '@ioc:Adonis/Lucid/Factory'
import Address from 'App/Models/Address'
import Contact from 'App/Models/Contact'
import Phone from 'App/Models/Phone'
import Email from 'App/Models/Email'

export const PhoneFactory = Factory
  .define(Phone, ({ faker }) => {
    return {
      number: faker.phone.phoneNumber(),
    }
  }).build()

export const AddressFactory = Factory
  .define(Address, ({ faker }) => {
    return {
      description: faker.address.streetAddress(),
    }
  }).build()

export const EmailFactory = Factory
  .define(Email, ({ faker }) => {
    return {
      account: faker.internet.exampleEmail(),
    }
  }).build()

export const ContactFactory = Factory
  .define(Contact, ({ faker }) => {
    return {
      name: `${faker.name.firstName()} ${faker.name.lastName()}`,
    }
  })
  .relation('phones', () => PhoneFactory)
  .relation('addresses', () => AddressFactory)
  .relation('emails', () => EmailFactory)
  .build()
