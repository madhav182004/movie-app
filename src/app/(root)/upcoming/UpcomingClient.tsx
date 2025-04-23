"use client"
import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import MovieCard from '@/components/MovieCard';
import SkeletonLoading from '@/components/SkeletonLoading';

const Api_key = process.env.NEXT_PUBLIC_API_KEY;

const UpcomingClient = () => {

    const [page, setPage] = useState(1)
    const [totalPages, setTotalPages] = useState(0)
    const [allMovies, setAllMovies] = useState<any | null>(null)
    const [loading, setLoading] = useState(true) 
  
    const searchParams = useSearchParams()
    const search = searchParams.get('search')
  
    const fetchAllMovies = async () => {
      try{
        let API_URL = ''
  
        if(search) //search api
        {
          API_URL = `https://api.themoviedb.org/3/search/movie?api_key=${Api_key}&language=en-US&query=${search}&page=${page}`
        }
        else //upcoming movies api
        {
          API_URL = `https://api.themoviedb.org/3/movie/upcoming?api_key=${Api_key}&language=en-US&page=${page}`
        }

        setLoading(true)
        const response = await fetch(API_URL)
        const data = await response.json()
        setAllMovies(data?.results)
        setTotalPages(data?.total_pages)
      }catch(error: any){
        console.log(error.message);
      }finally{
        setLoading(false)
      }
    }
    useEffect(() => {
      fetchAllMovies()
    }, [page, search])

  return (
    <>
      <div>
        <h2 className="text-2xl font-bold text-center md:text-left pb-4">
          {
            search ? 'Search Result for '+ search : 'Upcoming Movies'
          }
        </h2>
      </div>

      {/* <div className="flex justify-center mb-4">
        <button 
          onClick={() => setPage(prev => Math.max(prev - 1, 1))}
          disabled={page === 1}
          className="px-4 py-2 bg-gray-300 text-gray-700 rounded-l-lg disabled:opacity-50">Previous</button>
        <span className="px-4 py-2 bg-gray-200 text-gray-800">
          Page {page} of {totalPages}
        </span>
        <button
          onClick={() => setPage(prev => Math.min(prev + 1, totalPages))}
          disabled={page === totalPages}
          className="px-4 py-2 bg-gray-300 text-gray-700 rounded-r-lg disabled:opacity-50">Next</button>
      </div> */}
      
      {
        loading ? <SkeletonLoading /> : <div className="mx-4 my-8 grid grid-cols-2 md:grid-cols-4 gap-5">
        {
          !allMovies ? 'Loading...' : allMovies?.length === 0 ? 'No movies found' : 
          allMovies.map((movie: any, index: number) => (
            <MovieCard key={index} movie_id={movie.id} title={movie.title} rating={movie.vote_average} posterUrl={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
          ))
        }
        </div>
      }

      <div className="flex justify-center mb-8">
        <button 
          onClick={() => setPage(prev => Math.max(prev - 1, 1))}
          disabled={page === 1}
          className="px-4 py-2 bg-gray-300 text-gray-700 rounded-l-lg disabled:opacity-50">Previous</button>
        <span className="px-4 py-2 bg-gray-200 text-gray-800">
          Page {page} of {totalPages}
        </span>
        <button
          onClick={() => setPage(prev => Math.min(prev + 1, totalPages))}
          disabled={page === totalPages}
          className="px-4 py-2 bg-gray-300 text-gray-700 rounded-r-lg disabled:opacity-50">Next</button>
      </div>
    </>
  )
}

export default UpcomingClient