import useSeasonalAnime from '../hooks/useSeasonalAnime'
import { SeasonalAnime } from '../types/seasonalAnime'
import { sortObject } from '../utils/sorting'

const Home: React.FC = () => {
  const { seasonalAnime, isFetching } = useSeasonalAnime()

  console.log(seasonalAnime, isFetching)
  return (
    <div>
      {!isFetching &&
        sortObject(seasonalAnime.Page.media).map((media: SeasonalAnime) => (
          <div
            key={media.id}
            onClick={() =>
              window.open(
                `https://myanimelist.net/animelist/username?s=${media.title.romaji}`,
                '_blank',
                'top=500,left=200,width=1200,frame=true,nodeIntegration=true',
              )
            }
          >
            {media.title.romaji}
          </div>
        ))}
    </div>
  )
}

export default Home
