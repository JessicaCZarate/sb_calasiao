import React from 'react'
import Link from 'next/link'

const Badge = ({text, href}: {text: string, href: string}) => {
  return (
      <Link href={href} className="rounded-badge px-16 py-1 font-figlight my-2 text-slate-950 bg-white hover:bg-gray-200 tracking-widest sm:text-xs lg:text-sm">{text}</Link>
  )
}

export default Badge
