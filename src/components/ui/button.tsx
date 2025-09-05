import * as React from 'react'
type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & { asChild?: boolean; variant?: 'default'|'outline'; size?: 'sm'|'md'|'lg'; className?: string }
export function Button({ asChild, children, variant='default', size='md', className='', ...rest }: Props) {
  const base = 'inline-flex items-center justify-center font-medium transition-colors focus:outline-none rounded-2xl'
  const v = variant === 'outline'
    ? 'border border-slate-300 bg-white hover:bg-slate-50 text-slate-900'
    : 'bg-slate-900 text-white hover:bg-slate-800'
  const s = size === 'sm' ? 'h-9 px-3 text-sm' : size === 'lg' ? 'h-12 px-6 text-base' : 'h-10 px-4 text-sm'
  if (asChild) return <span className={`${base} ${v} ${s} ${className}`}>{children}</span>
  return <button className={`${base} ${v} ${s} ${className}`} {...rest}>{children}</button>
}
