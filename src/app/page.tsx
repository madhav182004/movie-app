"use client"

import dynamic from 'next/dynamic'

const HomeClient = dynamic(() => import('../components/HomeClient'), {
  ssr: false
})

const Page = () => {
  return <HomeClient />
}

export default Page