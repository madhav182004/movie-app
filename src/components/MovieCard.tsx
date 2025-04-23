import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface Card {
    title: string
    rating: number
    posterUrl: string
    movie_id: number | null
}

const MovieCard: React.FC<Card> = ({ movie_id, title, rating, posterUrl }) => {
  return (
    <Link href={`/movie/${movie_id}`} passHref>
        <div className='max-w-xs bg-gray-800 text-white rounded-lg overflow-hidden shadow-lg cursor-pointer h-auto'>
            <div className="relative w-full h-96">
                <Image
                    src={posterUrl}
                    alt={`${title} Poster`}
                    fill
                    priority
                    className="rounded-t-lg object-cover"
                    quality={100}
                />
            </div>
            <div className="p-4 h-32 md:h-auto">
                <h3 className="text-lg font-bold-mb-2">
                    {title}
                </h3>
                <p className='text-gray-400'>Rating: {rating}</p>
            </div>
        </div>
    </Link>
  )
}

export default MovieCard;