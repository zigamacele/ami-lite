import dayjs, { extend, unix } from 'dayjs'
import duration from 'dayjs/plugin/duration'
import { useEffect, useState } from 'react'

extend(duration)

interface CountdownProps {
  timestamp: number
}

const Countdown: React.FC<CountdownProps> = ({ timestamp }) => {
  const [countdown, setCountdown] = useState(
    dayjs.duration({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    }),
  )

  useEffect(() => {
    const interval = setInterval(() => {
      const duration = dayjs.duration(unix(timestamp).diff(dayjs()))
      setCountdown(duration)
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div>
      {countdown.days()}d {countdown.hours()}h {countdown.minutes()}m{' '}
      {countdown.seconds()}s
    </div>
  )
}

export default Countdown
