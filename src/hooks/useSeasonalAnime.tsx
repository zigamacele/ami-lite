import dayjs from 'dayjs'
import { useQuery } from 'urql'
import { seasonalMedia } from '../graphql/query/seasonalMedia'
import { currentAnimeSeason } from '../utils/currentSeason'

const useSeasonalAnime = () => {
  const variables = {
    season: currentAnimeSeason(dayjs().month()),
    seasonYear: dayjs().year(),
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
