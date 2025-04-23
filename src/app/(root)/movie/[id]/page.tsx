"use client"
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import CastDetails from '@/components/CastDetails';

const Api_key = process.env.NEXT_PUBLIC_API_KEY;

const SingleDetailPage: React.FC = ({ params }: any) => {

  const { id } = params;

  const [movie, setMovie] = useState<any>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchSingleMovie = async () => {
      if (!id) return;
      try{
        setLoading(true)

        const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${Api_key}&language=en-US`)
        const data = await res.json();

        if(!res?.ok)
        {
          throw new Error(`Failed to fetch movie details: ${res.status}`)
        }
        console.log(data)
        setMovie(data)
        setLoading(false)
      }catch(error: any){
        console.log(error.message)
        setError(error.message)
      }
    }
    fetchSingleMovie()
  }, [id])

  if (loading) {
    return <div className="text-center text-white">Loading movie details...</div>;
  }

  if (error) {
      return <div className="text-center text-red-500">Error: {error}</div>;
  }

  if (!movie) {
      return <div className="text-center text-white">No movie data found.</div>;
  }
  return (
    <>
      <div className='relative bg-gray-900 text-white rounded-lg shadow-lg m-4 flex flex-col md:flex-row'>

        <div className='relative flex flex-col justify-between w-full md:w-1/2 p-6 border border-black/10 bg-gradient-to-br from-black via-black to-gray-900 rounded-lg shadow-lg'>
          <div>
            <Image 
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={movie.title}
              width={150}
              height={225}
              className='rounded-lg shadow-lg'
            />
          </div>
          <div className="mt-4">
            <h1 className="text-3xl font-bold mb-2">{movie.title}</h1>
            <div className="text-gray-300 mb-4 flex items-center">
              <span className="mr-2">
                <span className="text-blue-400 font-semibold">Rating: </span>
                {movie.vote_average?.toFixed(1)}
              </span>
            </div>

            <div className="flex items-center text-sm text-gray-400 mb-4">
              <span className="mr-4">{movie.runtime} min</span>
              <span>{movie.genres.map((g: any) => g.name).join(", ")}</span>
            </div>

            <div className="text-gray-400 mb-4">
              <span className="mr-2">Release Date:</span>
                {new Date(movie.release_date).toLocaleDateString("en-GB", {
                  weekday: "short",
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                })}
            </div>

            <div className="text-lg text-white mt-4">
                <h3 className="font-semibold">Overview</h3>
                <p className="text-gray-300">{movie.overview}</p>
            </div>
          </div>
        </div>
        <div
          className="relative w-full lg:w-1/2 bg-cover bg-center rounded-r-lg h-[400px] lg:h-auto"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/w500${movie.backdrop_path})`,
          }}
        >
        </div>
      </div>

      <CastDetails movie_id={id} />
    </>
  )
}

export default SingleDetailPage