import { motion } from 'framer-motion'
import { CalendarOff, CalendarPlus, ListPlus, Youtube } from 'lucide-react'
import { useListState } from '../../stores/listStore'
import { SeasonalAnime } from '../../types/seasonalAnime'
import {
  openUpdateWindow,
  openTrailerWindow,
} from '../../utils/openInNewWindow'
import Countdown from './Countdown'
import { useUserState } from '../../stores/userStore'

interface IndividualAnimeProps {
  media: SeasonalAnime
}

const IndividualAnime: React.FC<IndividualAnimeProps> = ({ media }) => {
  const { list, updateList } = useListState()
  const { username, platform } = useUserState()

  return (
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
      className='relative flex items-center justify-center'
    >
      <div className='absolute right-0 z-40 px-2 text-sm border-r rounded-l-full top-14 right bg-neutral-900/80 border-neutral-600/80 backdrop-blur-sm'>
        <Countdown timestamp={media.nextAiringEpisode.airingAt} />
      </div>
      <div
        className='flex items-center justify-center absolute z-40 object-cover w-8 h-8 bg-neutral-900 rounded border border-neutral-600/80 drop-shadow-xl top-2.5 right-2.5 text-xl'
        onClick={() => {
          updateList(media.id)
        }}
      >
        {list.includes(media.id.toString()) ? (
          <CalendarOff
            size={20}
            strokeWidth={1.5}
            className='cursor-pointer hover:opacity-60'
          />
        ) : (
          <CalendarPlus
            size={20}
            strokeWidth={1.5}
            className='cursor-pointer hover:opacity-60'
          />
        )}
      </div>
      <img
        className='absolute z-30 object-cover w-20 h-[7.5em] rounded border border-neutral-600/80 drop-shadow-xl top-2.5 left-2.5'
        src={media.coverImage.extraLarge}
      />
      <div className='z-10 h-36 border-[1px] border-neutral-600/80 rounded-md aboslute w-80 bg-neutral-900/80'>
        <img
          className='object-cover w-full h-20 rounded-t-md border-b-[1px] border-neutral-600/80'
          src={media.bannerImage ?? media.coverImage.extraLarge}
        />
        <div className='gap-1 px-2 py-1 ml-[6.4em] text-sm truncate'>
          <span className='font-bold'>{media.title.romaji}</span>
          <hr className='mt-1 opacity-10' />
          <div className='flex gap-3 mt-1'>
            <div
              className='flex items-center gap-1 cursor-pointer hover:opacity-60'
              onClick={() =>
                openUpdateWindow(
                  media.id,
                  media.title.romaji,
                  username,
                  platform,
                )
              }
            >
              <ListPlus size={18} strokeWidth={1.5} /> <span>Update</span>
            </div>
            <div
              className='flex items-center gap-1 cursor-pointer hover:opacity-60'
              onClick={() => openTrailerWindow(media.title.romaji)}
            >
              <Youtube size={18} strokeWidth={1.5} />
              <span>Trailers</span>
            </div>
          </div>
        </div>
      </div>
      <div className='absolute top-0 z-20 w-full h-20 opacity-30 bg-gradient-to-t from-neutral-900 hover:from-neutra'></div>
      <div
        className='absolute w-64 h-16 blur-2xl fade-in'
        style={{
          backgroundColor: media.coverImage.color
            ? media.coverImage.color
            : '#737373',
        }}
      ></div>
    </motion.div>
  )
}

export default IndividualAnime
