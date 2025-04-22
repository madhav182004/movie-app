import React from 'react'

interface Card {
    title:string
    rating:number
    posterUrl:string
}

const MovieCard: React.FC<Card> = ({ title, rating, posterUrl }) => {
  return (
    <div className='max-w-xs bg-gray-800 text-white rounded-lg overflow-hidden shadow-lg'>
        <img 
            src={posterUrl} 
            alt={`${title} Poster`} 
            className='w-full object-cover'
        />
        <div className="p-4">
            <h3 className="text-lg font-bold-mb-2">
                {title}
            </h3>
            <p className='text-gray-400'>Rating: {rating}</p>
        </div>
    </div>
  )
}

export default MovieCard;