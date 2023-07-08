import { SeasonalAnime } from '../types/seasonalAnime'

export const sortObject = (data: SeasonalAnime[]) => {
  function compareByNextAiringEpisode(a: SeasonalAnime, b: SeasonalAnime) {
    return a.nextAiringEpisode.airingAt - b.nextAiringEpisode.airingAt
  }

  return data.sort(compareByNextAiringEpisode)
}
