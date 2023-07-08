interface FuzzyDate {
  day: number
  month: number
  year: number
  __typename: string
}

interface AiringSchedule {
  airingAt: number
  timeUntilAiring: number
  episode: number
  mediaId: number
  __typename: string
}

interface MediaTitle {
  romaji: string
  english: string
  native: string
  __typename: string
}

interface MediaCoverImage {
  large: string
  color: string
  __typename: string
}

export interface SeasonalAnime {
  id: number
  status: string
  endDate: FuzzyDate
  startDate: FuzzyDate
  format: string
  season: string
  seasonYear: number
  favourites: number
  episodes: number
  genres: string[]
  averageScore: number | null
  type: string
  nextAiringEpisode: AiringSchedule
  title: MediaTitle
  bannerImage: string
  coverImage: MediaCoverImage
  __typename: string
}
