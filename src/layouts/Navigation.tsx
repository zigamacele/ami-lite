import { CalendarCheck, CalendarRange, Cog } from 'lucide-react'

const Navigation: React.FC = () => {
  return (
    <div className='fixed z-50 flex items-center justify-between w-full px-4 py-2 border-b text bg-neutral-900/60 backdrop-blur-md border-neutral-600/80'>
      <span>Ami</span>
      <div className='flex items-center gap-2'>
        <CalendarCheck size={20} strokeWidth={1.5} />
        <CalendarRange size={20} strokeWidth={1.5} className='mr-3' />
        <Cog size={22} strokeWidth={1.5} />
      </div>
    </div>
  )
}

export default Navigation
