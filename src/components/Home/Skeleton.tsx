import { motion } from 'framer-motion'

const Skeleton: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 1, y: 30 }}
      whileInView={{
        y: 0,
        opacity: 0,
        transition: {
          type: 'spring',
          bounce: 0.4,
          duration: 1.8,
        },
      }}
      className='relative flex items-center justify-center'
    >
      <div className='z-10 h-36 border-[1px] border-neutral-600/80 rounded-md aboslute w-80 bg-neutral-900/80'></div>
    </motion.div>
  )
}

export default Skeleton
