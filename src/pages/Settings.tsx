import { Input, Switch } from '@mui/joy'
import { useUserState } from '../stores/userStore'

const Settings: React.FC = () => {
  const { username, platform, updateUsername, updatePlatform } = useUserState()
  return (
    <section className='relative flex justify-center pt-14'>
      <div className='z-10 px-4 border-[1px] border-neutral-600/80 rounded-md aboslute w-80 py-3 bg-neutral-900/80 text-sm fade-in-fast'>
        <div className='flex items-center justify-between'>
          <span className='opacity-60'>Platform</span>
          <div className='flex items-center gap-2'>
            <span>MyAnimeList</span>
            <Switch
              size='sm'
              checked={platform}
              onChange={(event) => updatePlatform(event.target.checked)}
            />

            <span>AniList</span>
          </div>
        </div>
        <hr className='my-2 opacity-10' />
        <div className='flex items-center justify-between gap-1'>
          <span className='opacity-60'>Username</span>
          <Input
            value={username}
            size='sm'
            disabled={platform}
            sx={{
              color: 'white',
              backgroundColor: '#52525b',
              borderColor: '#262626',
            }}
            onChange={(event) => updateUsername(event.target.value)}
            placeholder='Enter your username'
          />
        </div>
      </div>
      <div className='absolute w-64 h-16 blur-2xl fade-in bg-neutral-400'></div>
    </section>
  )
}

export default Settings
