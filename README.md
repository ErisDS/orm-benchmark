# ORM Benchmark

_Credits: The idea for this repo was taken heavily from https://github.com/emilioforrer/adonis-api-orm-benchmark-app by Emilio Forrer._

## Summary
This respository contains an Adonis v5 application with providers for Lucid, Objection and Bookshelf.

Each ORM has a Contacts, Emails, Phones & Addresses model. The database gets seeded with 1000 contacts, each with 2 emails, 2 phones and 2 addresses.

Each ORM is then wired to an endpoint e.g. `/api/v1/[lucid|bookshelf|objection]/contacts`

The `scripts` directory contains a benchmarking script that runs autocannon against the 3 endpoints in turn and summarises the results.

## Usage

- Ensure you have Node 16 and Postgres installed locally
- Clone the repository
- Copy `.env.example` to `.env` and update with database credentials
- Run `node ace migration:run` to setup the DB
- Run `node ace db:seed` to seed the DB with data
- Run `node ace serve` to start the server
- Run `node scripts/benchmark.js` to run the benchmark

TODO: figure out Adonis CLI and make the benchamrk run with `node ace benchmark` :D

## Results

Run on my 2021 MacBook M1 Max

**duration benchmark results:**

- Bookshelf:	 81 requests in 20.03s, 83.4 MB read
- Objection:	 360 requests in 20.02s, 390 MB read
- Lucid:		 22 requests in 20.02s, 18.4 MB read

- Objection is better than Bookshelf by 367.12%
- Objection is better than Lucid by 2015.73%
- Bookshelf is better than Lucid by 352.93%

**throughput benchmark results:**

- Bookshelf:	 100 requests in 30.03s, 110 MB read
- Objection:	 100 requests in 6.01s, 110 MB read
- Lucid:		 100 requests in 109.11s, 108 MB read

- Objection is better than Bookshelf by 399.99%
- Objection is better than Lucid by 1740.85%
- Bookshelf is better than Lucid by 268.18%
