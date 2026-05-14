import type { LucideIcon } from 'lucide-react'
interface ButtonProps {
  children?: React.ReactNode
  onClick: () => void
  icon?: LucideIcon
  iconColor?: string
  iconSize?: number
  className?: string
}
const Button = ({
  children,
  onClick,
  icon: Icon,
  iconColor,
  iconSize,
  className = '',
}: ButtonProps) => {
  const baseClass =
    'flex items-center justify-center bg-transparent hover:brightness-125 gap-2 cursor-pointer'

  return (
    <button
      data-testid='button'
      className={`${baseClass} ${className}`}
      onClick={onClick}
    >
      {Icon && <Icon size={iconSize} color={iconColor} />}
      {children}
    </button>
  )
}

export default Button
