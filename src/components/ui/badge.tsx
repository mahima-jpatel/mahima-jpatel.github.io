import * as React from 'react'
export function Badge({ className='', children, variant='default' as any, ...rest }: React.HTMLAttributes<HTMLSpanElement> & { variant?: 'default'|'secondary' }) {
  const v = variant === 'secondary'
    ? 'bg-slate-100 text-slate-900 border border-slate-200'
    : 'bg-slate-900 text-white'
  return <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs ${v} ${className}`} {...rest}>{children}</span>
}
