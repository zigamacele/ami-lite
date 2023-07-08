import useSeasonalAnime from '../../hooks/useSeasonalAnime'
import { SeasonalAnime } from '../../types/seasonalAnime'
import { openInNewWindow } from '../../utils/openInNewWindow'
import { sortObject } from '../../utils/sorting'
import Countdown from './Countdown'

const Spotlight: React.FC = () => {
  const { seasonalAnime, isFetching } = useSeasonalAnime()

  return (
    <section className='flex flex-col gap-4'>
      {!isFetching &&
        sortObject(seasonalAnime.Page.media).map((media: SeasonalAnime) => (
          <div
            key={media.id}
            onClick={() => openInNewWindow(media.title.romaji)}
            className='border'
          >
            {media.title.romaji}
            <hr />
            <Countdown timestamp={media.nextAiringEpisode.airingAt} />
          </div>
        ))}
    </section>
  )
}

export default Spotlight
