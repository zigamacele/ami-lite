import IndividualAnime from '../components/Home/IndividualAnime'
import Skeleton from '../components/Home/Skeleton'
import useSeasonalAnime from '../hooks/useSeasonalAnime'
import { useListState } from '../stores/listStore'
import { SeasonalAnime } from '../types/seasonalAnime'
import { sortObject } from '../utils/sorting'

const Home: React.FC = () => {
  const { list, showMyList } = useListState()
  const { seasonalAnime, isFetching } = useSeasonalAnime()
  return (
    <section className='flex flex-col items-center gap-4 pb-4 pt-14 '>
      {!isFetching ? (
        sortObject({ data: seasonalAnime.Page.media, showMyList, list }).map(
          (media: SeasonalAnime) => (
            <IndividualAnime media={media} key={media.id} />
          ),
        )
      ) : (
        <>
          {[...Array(4)].map((_x, index) => (
            <Skeleton key={index} />
          ))}
        </>
      )}
    </section>
  )
}

export default Home
