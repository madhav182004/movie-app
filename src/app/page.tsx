"use client"
import React, { useEffect } from "react";
import MovieCard from "../components/MovieCard";

const Api_key = "c45a857c193f6302f2b5061c3b85e743";
const API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${Api_key}&language=en-US&page=1`;
const HomePage = () => {
  const fetchAllMovies = async () => {
    try{
      console.log(API_URL)
    }catch(error: any){
      console.log(error.message);
    }
  }
  useEffect(() => {
    fetchAllMovies()
  }, [])

  return (
    <div>
      <MovieCard title="vdvv" rating={2} posterUrl="https://cdn.marvel.com/content/1x/eternals_lob_crd_06.jpg" />
    </div>
  );
}

export default HomePage;
