import { useQuery } from 'urql'
import { seasonalMedia } from '../graphql/query/seasonalMedia'

const useSeasonalAnime = () => {
  const variables = {
    season: 'SUMMER',
    seasonYear: 2023,
    format: 'TV',
  }

  const [result, reexecuteQuery] = useQuery({
    query: seasonalMedia,
    variables: variables,
  })

  const refresh = () => {
    reexecuteQuery({ requestPolicy: 'cache-and-network' })
  }

  const { data, fetching, error } = result

  return {
    seasonalAnime: data,
    isFetching: fetching,
    error,
    refresh,
  }
}

export default useSeasonalAnime
