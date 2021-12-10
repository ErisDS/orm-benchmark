import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import { ContactFactory } from 'Database/factories'

export default class ContactSeeder extends BaseSeeder {
  public async run () {
    // Write your database queries inside the run method
    const contacts = await ContactFactory
      .with('phones', 2)
      .with('emails', 2)
      .with('addresses', 2)
      .createMany(1000)
  }
}
