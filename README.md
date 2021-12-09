# Hasura GraphQL Engine demo

This setup follows the basic outline provided in [this overview post](https://hasura.io/blog/moving-from-local-development-staging-production-with-hasura/). For a more on GraphQL and Hasura, try [Hasura Learn](https://hasura.io/learn/) (the auth patterns / Slack clone tutorial does a good job IIRC)

```
docker-compose up -d
```

### purpose:

Why GraphQL? A GraphQL service is meant to provide a _unified_ data source for an application: one endpoint, one app. It should also avoid imposing requirements on the upstream or peer data sources. 

The point is to maximize the velocity and flexibility available to application developers while minimizing the engineering investment required on the backend to add features, document, and maintain a good service.

Just like REST APIs, GraphQL requires translation between the request and the database response. With GraphQL emphasis on the well-defined "schema" from the outset, this is well automated! There are several approaches to automagical service between client and database, so CRUD becomes available by default (efficiently! securely!) with extention and customization available as much as needed:

* business logic or data transformation

* 3rd-party sources or services (ML models, Stripe / Auth0 / Meetup APIs)

* post-db-events automated activity (send an email, update a system)

* additional security: whitelist-only operations, rate limiting, depth limits

### prereqs:

1. docker!

1. hasura: install the cli via [homebrew](https://formulae.brew.sh/formula/hasura-cli) or follow the [instructions](https://hasura.io/docs/latest/graphql/core/hasura-cli/install-hasura-cli.html#installing-the-hasura-cli)

1. server / functions setup: Today we're using Vercel because it's free and easy! Also ngrok because I don't want to ship a db + container today; Heroku or Render are great for free sandboxes.

1. auth0 app (detailed instructions [here](https://hasura.io/docs/latest/graphql/core/guides/integrations/auth0-jwt.html#guides-auth0-jwt))


## Alternatives

GraphQL is getting more popular and so more services are supporting it! Performance has been a huge issue in the past, but many services are mature enough / smart enough to have good or great efficiency

* [GraphJin](https://graphjin.com/): OSS-only Hasura clone built by a Googler. Uses Go instead of Haskell under the hood and has a bunch of tooling (yay?) and good deployment / monitoring guides (yay!)

* [Tyk](https://tyk.io/benchmark/): No idea about this one, looks nice but I don't know of any teams who have really kicked the tires yet

* [Postgraphile](https://www.graphile.org/postgraphile/performance/): Another popular option, but emphasizes [Postgres-fu](https://www.graphile.org/postgraphile/custom-mutations/)

* [pg_graphql](https://supabase.github.io/pg_graphql/): New and super exciting! Going to watch this project closely

* Prisma: Does not offer any transpilation/automation

* Apollo Server: Does not offer any transpilation/automation

* AWS Amplify: Does not offer any transpilation/automation

* Strapi: A CMS, not a server, but fun for projects. Start [here](https://strapi.io/blog/how-to-self-host-your-headless-cms-using-docker-compose)
