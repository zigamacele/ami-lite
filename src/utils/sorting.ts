import { SeasonalAnime } from '../types/seasonalAnime'

type SortObjectFunction = (params: {
  data: SeasonalAnime[]
  showMyList: boolean
  list: string[]
}) => SeasonalAnime[]

export const sortObject: SortObjectFunction = ({ data, showMyList, list }) => {
  if (!showMyList || list.length === 0) return data

  function compareByNextAiringEpisode(a: SeasonalAnime, b: SeasonalAnime) {
    return a.nextAiringEpisode.airingAt - b.nextAiringEpisode.airingAt
  }

  return data
    .sort(compareByNextAiringEpisode)
    .filter((media: SeasonalAnime) => list.includes(media.id.toString()))
}
