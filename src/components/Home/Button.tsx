interface ButtonProps {
  text: string
  special?: boolean
}

const Button: React.FC<ButtonProps> = ({ text, special }) => {
  return (
    <div className='border-[1px] border-neutral-600/80 rounded-full px-2 cursor-pointer hover:border-neutral-500'>
      {text}
    </div>
  )
}

export default Button
