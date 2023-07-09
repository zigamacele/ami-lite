import { CalendarCheck, CalendarRange, Cog } from 'lucide-react'
import { useListState } from '../stores/listStore'

const Navigation: React.FC = () => {
  const { showMyList, toggleMyList, list } = useListState()

  return (
    <div className='fixed z-50 flex items-center justify-between w-full px-4 py-2 border-b text bg-neutral-900/60 backdrop-blur-md border-neutral-600/80'>
      <span>Ami</span>
      <div className='flex items-center gap-2'>
        <CalendarCheck
          size={20}
          strokeWidth={1.5}
          className={`${
            (!showMyList || list.length === 0) && 'opacity-40'
          } cursor-pointer`}
          onClick={() => list.length > 0 && toggleMyList(true)}
        />
        <CalendarRange
          size={20}
          strokeWidth={1.5}
          className={`${
            showMyList && list.length > 0 && 'opacity-40'
          } mr-3 cursor-pointer`}
          onClick={() => toggleMyList(false)}
        />
        <Cog size={22} strokeWidth={1.5} />
      </div>
    </div>
  )
}

export default Navigation
