import Link from 'next/link'
import React from 'react'

const route = () => {
  return (
    <button><Link href="/api/about">about page</Link></button>
  )
}

export default route