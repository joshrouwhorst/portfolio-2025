interface ButtonProps {
  onClick?: () => void
  href?: string
  disabled?: boolean
  children: React.ReactNode
  className?: string
  color?: 'black' | 'white' | 'sky' | 'teal' | 'red' // Tailwind color name, e.g., 'black', 'white', 'sky'
  type?: 'button' | 'submit' | 'reset'
}

export default function Button({
  onClick,
  children,
  className = '',
  color = 'black',
  type = 'button',
  href,
  disabled = false,
}: ButtonProps) {
  let colorCls = null

  switch (color) {
    case 'white':
      colorCls =
        'border-white text-white bg-transparent hover:bg-white hover:text-sky-900'
      break
    case 'sky':
      colorCls =
        'border-sky-500 text-sky-500 bg-transparent hover:bg-sky-600 hover:text-white'
      break
    case 'teal':
      colorCls =
        'border-teal-500 text-teal-500 bg-transparent hover:bg-teal-600 hover:text-white'
      break
    case 'red':
      colorCls =
        'border-red-500 text-red-500 bg-transparent hover:bg-red-600 hover:text-white'
      break
    case 'black':
    default:
      colorCls =
        'border-black text-black bg-transparent hover:bg-black hover:text-white'
      break
  }

  const buttonClass = `btn border-1 py-2 px-4 uppercase font-mono inline-block ${colorCls} ${className} transition-colors`

  if (href) {
    if (disabled) {
      return (
        <span className={`opacity-50 cursor-not-allowed ${buttonClass}`}>
          {children}
        </span>
      )
    }

    return (
      <a href={href} className={buttonClass}>
        {children}
      </a>
    )
  }

  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={buttonClass}
      type={type}
    >
      {children}
    </button>
  )
}
