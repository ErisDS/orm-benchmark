import Factory from '@ioc:Adonis/Lucid/Factory'
import Address from 'App/Models/Address'
import Contact from 'App/Models/Contact'
import Phone from 'App/Models/Phone'
import Email from 'App/Models/Email'
import Event from 'App/Models/Event'

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
  .relation('events', () => EventFactory)
  .build()

const eventTypes = [
  'signup',
  'login',
  'subscribe',
  'unsubscribe',
  'payment',
  'refund',
  'cancellation',
  'pageview',
]

export const EventFactory = Factory
  .define(Event, ({ faker }) => {
    return {
      data: JSON.stringify({
        lat: faker.address.latitude(),
        lng: faker.address.longitude(),
        country: faker.address.countryCode(),
        amount: faker.finance.amount(),
        currency: faker.finance.currencyCode(),
        product: faker.commerce.product(),
        initiated_by: faker.random.arrayElement(['user', 'admin']),
        email: faker.internet.email(),
        ip: faker.random.arrayElement([faker.internet.ip(), faker.internet.ipv6()]),
        url: faker.internet.url(),
      }),
      type: faker.random.arrayElement(eventTypes),
      uuid: faker.datatype.uuid(),
    }
  }).build()
