import { Client, cacheExchange, fetchExchange } from 'urql'

export const client = new Client({
  url: 'https://graphql.anilist.co',
  exchanges: [cacheExchange, fetchExchange],
})
