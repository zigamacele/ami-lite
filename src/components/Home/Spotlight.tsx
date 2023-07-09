import { motion } from 'framer-motion'
import { CalendarPlus, ListPlus, PackagePlus, Youtube } from 'lucide-react'
import useSeasonalAnime from '../../hooks/useSeasonalAnime'
import { SeasonalAnime } from '../../types/seasonalAnime'
import { openInNewWindow } from '../../utils/openInNewWindow'
import { sortObject } from '../../utils/sorting'
import Countdown from './Countdown'

const Spotlight: React.FC = () => {
  const { seasonalAnime, isFetching } = useSeasonalAnime()

  console.log(seasonalAnime)

  return (
    <section className='flex flex-col items-center gap-4 pb-4 pt-14'>
      {!isFetching &&
        sortObject(seasonalAnime.Page.media).map((media: SeasonalAnime) => (
          <motion.div
            initial={{ opacity: 0, y: 5 }}
            whileInView={{
              y: 0,
              opacity: 1,
              transition: {
                type: 'spring',
                bounce: 0.4,
                duration: 0.8,
              },
            }}
            key={media.id}
            // onClick={() => openInNewWindow(media.title.romaji)}
            className='relative flex items-center justify-center'
          >
            <div className='absolute right-0 z-40 px-2 text-sm border-r rounded-l-full top-14 right bg-neutral-900/80 border-neutral-600/80 backdrop-blur-sm'>
              <Countdown timestamp={media.nextAiringEpisode.airingAt} />
            </div>
            <div className='flex items-center justify-center absolute z-40 object-cover w-8 h-8 bg-neutral-900 rounded border border-neutral-600/80 drop-shadow-xl top-2.5 right-2.5 text-xl cursor-pointer'>
              <CalendarPlus size={20} strokeWidth={1.5} />
            </div>
            <img
              className='absolute z-30 object-cover w-20 h-[7.5em] rounded border border-neutral-600/80 drop-shadow-xl top-2.5 left-2.5'
              src={media.coverImage.extraLarge}
            />
            <div className='z-10 h-36 border-[1px] border-neutral-600/80 rounded-md aboslute w-80 bg-neutral-900/80'>
              <img
                className='object-cover w-full h-20 rounded-t-lg border-b-[1px] border-neutral-600/80'
                src={media.bannerImage ?? media.coverImage.extraLarge}
              />
              <div className='gap-1 px-2 py-1 ml-[6.4em] text-sm truncate'>
                <span className='font-bold'>{media.title.romaji}</span>
                <hr className='mt-1 opacity-10' />
                <div className='flex gap-3 mt-1'>
                  <div className='flex items-center gap-1 '>
                    <ListPlus size={18} strokeWidth={1.5} /> <span>Update</span>
                  </div>
                  <div className='flex items-center gap-1 '>
                    <Youtube size={18} strokeWidth={1.5} />
                    <span>Trailers</span>
                  </div>
                </div>
              </div>
            </div>
            <div className='absolute top-0 z-20 w-full h-20 opacity-30 bg-gradient-to-t from-neutral-900 hover:from-neutra'></div>
            <div
              className={`absolute h-16 w-64 blur-2xl `}
              style={{
                backgroundColor: media.coverImage.color
                  ? media.coverImage.color
                  : '#737373',
              }}
            ></div>
          </motion.div>
        ))}
    </section>
  )
}

export default Spotlight
