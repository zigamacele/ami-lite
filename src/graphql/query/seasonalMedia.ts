import { gql } from 'urql'

export const seasonalMedia = gql`
  query (
    $format: MediaFormat
    $perPage: Int
    $page: Int
    $season: MediaSeason
    $seasonYear: Int
  ) {
    Page(page: $page, perPage: $perPage) {
      media(
        sort: [POPULARITY_DESC, ID]
        format: $format
        isAdult: false
        season: $season
        seasonYear: $seasonYear
      ) {
        id
        status
        endDate {
          day
          month
          year
        }
        startDate {
          day
          month
          year
        }
        format
        season
        seasonYear
        favourites
        episodes
        status
        genres
        averageScore
        type
        nextAiringEpisode {
          airingAt
          timeUntilAiring
          episode
          mediaId
        }
        title {
          romaji
          english
          native
        }
        bannerImage
        coverImage {
          extraLarge
          color
        }
      }
    }
  }
`
