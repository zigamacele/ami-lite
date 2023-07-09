import IndividualAnime from '../components/Home/IndividualAnime'
import useSeasonalAnime from '../hooks/useSeasonalAnime'
import { SeasonalAnime } from '../types/seasonalAnime'
import { sortObject } from '../utils/sorting'

const Home: React.FC = () => {
  const { seasonalAnime, isFetching } = useSeasonalAnime()
  return (
    <section className='flex flex-col items-center gap-4 pb-4 pt-14 bg-neutral-900'>
      {!isFetching &&
        sortObject(seasonalAnime.Page.media).map((media: SeasonalAnime) => (
          <IndividualAnime media={media} key={media.id} />
        ))}
    </section>
  )
}

export default Home
