import * as React from 'react'
export function Card({ className='', ...p }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={`bg-white border border-slate-200 rounded-2xl shadow-sm ${className}`} {...p} />
}
export function CardHeader({ className='', ...p }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={`p-5 ${className}`} {...p} />
}
export function CardTitle({ className='', ...p }: React.HTMLAttributes<HTMLHeadingElement>) {
  return <h3 className={`text-lg font-semibold ${className}`} {...p} />
}
export function CardContent({ className='', ...p }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={`p-5 pt-0 ${className}`} {...p} />
}
