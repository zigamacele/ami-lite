import { CalendarCheck, CalendarRange, Cog } from 'lucide-react'
import { useListState } from '../stores/listStore'
import { useNavigate } from 'react-router'
import { Tooltip } from '@mui/joy'

const Navigation: React.FC = () => {
  const { showMyList, toggleMyList, list } = useListState()
  const navigate = useNavigate()

  return (
    <div className='fixed z-50 flex items-center justify-between w-full px-4 py-2 border-b text bg-neutral-900/60 backdrop-blur-md border-neutral-600/80'>
      <span
        className='cursor-pointer hover:opacity-60'
        onClick={() => navigate('/')}
      >
        Ami
      </span>
      <div className='flex items-center gap-2'>
        <Tooltip placement='bottom-end' title='My List' size='sm'>
          <CalendarCheck
            size={20}
            strokeWidth={1.5}
            className={`${
              (!showMyList || list.length === 0) && 'opacity-40'
            } cursor-pointer`}
            onClick={() => list.length > 0 && toggleMyList(true)}
          />
        </Tooltip>
        <Tooltip placement='bottom-end' title='Seasonal Anime' size='sm'>
          <CalendarRange
            size={20}
            strokeWidth={1.5}
            className={`${
              showMyList && list.length > 0 && 'opacity-40'
            } mr-3 cursor-pointer`}
            onClick={() => toggleMyList(false)}
          />
        </Tooltip>
        <Tooltip placement='bottom-end' title='Settings' size='sm' arrow>
          <Cog
            size={22}
            strokeWidth={1.5}
            className='cursor-pointer'
            onClick={() => navigate('/settings')}
          />
        </Tooltip>
      </div>
    </div>
  )
}

export default Navigation
