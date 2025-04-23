"use client"

import dynamic from 'next/dynamic'

const TopRatedClient = dynamic(() => import('./TopRatedClient'), {
  ssr: false
})

const Page = () => {
  return <TopRatedClient />
}

export default Page