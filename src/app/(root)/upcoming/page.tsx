"use client"

import dynamic from 'next/dynamic'

const UpcomingClient = dynamic(() => import('./UpcomingClient'), {
  ssr: false
})

const Page = () => {
  return <UpcomingClient />
}

export default Page