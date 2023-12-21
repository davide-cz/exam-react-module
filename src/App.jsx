import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HomePage from './components/HomePage'
import SearchPage from './components/SearchPage'
import About from './components/About'
import { Routes,Route,  NavLink } from 'react-router-dom'
import Person from './components/Person'
import PersonLayout from './components/PersonLayout'


const apiKey=import.meta.env.VITE_API_KEY

const queryRequest= new URLSearchParams({
  api_key:apiKey,
}) 

//    fetch(`https://api.themoviedb.org/3/movie/popular?${queryRequest.toString()}`)

function App() {

  return (
    <>
      <nav>
          <menu className='navbar'>
            <li>
              <NavLink className='Navlink' to='/'>Home</NavLink>
            </li>
            <li>
              <NavLink className='Navlink' to='/about'>About</NavLink>
            </li>
            <li>
              <NavLink className='Navlink' to='/searchpage'>SearchPage</NavLink>
            </li>
          </menu>
        </nav>
      <Routes>
        <Route index element={<HomePage/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/searchpage' element={<SearchPage/>}/>
        <Route path='/person' element={<PersonLayout/>}></Route>
        <Route path='/person/:id' element={<Person/>}/>
      </Routes>
    </>
  )
}

export default App
