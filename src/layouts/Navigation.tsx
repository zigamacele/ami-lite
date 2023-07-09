import { Cog } from 'lucide-react'

const Navigation: React.FC = () => {
  return (
    <div className='fixed z-50 flex items-center justify-between w-full px-4 py-2 border-b text bg-neutral-900/60 backdrop-blur-md border-neutral-600/80'>
      <span>Ami</span>
      <Cog size={22} strokeWidth={1.5} />
    </div>
  )
}

export default Navigation
