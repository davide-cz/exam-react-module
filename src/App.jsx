import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HomePage from './components/HomePage'
import SearchPage from './components/SearchPage'


const apiKey=import.meta.env.VITE_API_KEY

const queryRequest= new URLSearchParams({
  api_key:apiKey,
}) 

//    fetch(`https://api.themoviedb.org/3/movie/popular?${queryRequest.toString()}`)

function App() {

  return (
    <>
      <HomePage

      />
      <SearchPage/>
    </>
  )
}

export default App
