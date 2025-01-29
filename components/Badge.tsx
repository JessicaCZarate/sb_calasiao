import React from 'react'
import Link from 'next/link'

const Badge = ({text, href}: {text: string, href: string}) => {
  return (
      <Link href={href} className="rounded-badge px-20 py-1 font-figtree my-2 text-slate-950 bg-white hover:bg-gray-200 tracking-widest">{text}</Link>
  )
}

export default Badge
