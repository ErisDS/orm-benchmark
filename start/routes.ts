/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'
import Contact from 'App/Models/Contact'
import BookshelfContact from '@ioc:Bookshelf/Contact'
import ObjectionContact from '@ioc:Objection/Contact'

Route.get('/', async () => {
  return { hello: 'world' }
})

Route.get('/api/v1/lucid/contacts', async () => {
  const contacts = await Contact
    .query()
    .preload('emails')
    .preload('phones')
    .preload('addresses')

  return contacts
})

Route.get('/api/v1/bookshelf/contacts', async () => {
  const contacts = await BookshelfContact.forge().fetchAll({
    withRelated: ['emails', 'phones', 'addresses'],
  })
  return contacts
})

Route.get('/api/v1/objection/contacts', async () => {
  const contacts = await ObjectionContact.query()
    .withGraphFetched('[emails, phones, addresses]')
  return contacts
})
