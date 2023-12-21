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
import LanguageContext from './components/LanguageContext'
import { useContext } from 'react'

const apiKey=import.meta.env.VITE_API_KEY



//    fetch(`https://api.themoviedb.org/3/movie/popular?${queryRequest.toString()}`)

function App() {

  const [language,setLanguage]=useState('en-US')
  
  const queryRequest= new URLSearchParams({
    api_key:apiKey,
    language:language
  }) 

  return (
    <>
      <nav>
          <menu className='navbar'>
            <li>
              <NavLink className='Navlink link' to='/'>Home</NavLink>
            </li>
            <li>
              <NavLink className='Navlink link' to='/about'>About</NavLink>
            </li>
            <li>
              <NavLink className='Navlink link' to='/searchpage'>SearchPage</NavLink>
            </li>
            <select name="language" 
              value={language}
              onChange={e=> setLanguage(e.target.value)}>
              <option value="en-US">eng</option>
              <option value="it-IT">ita</option>
            </select>
          </menu>
        </nav>
        <LanguageContext.Provider value={language}>

          <Routes>
            <Route index element={<HomePage/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/searchpage' element={<SearchPage/>}/>
            <Route path='/person' element={<PersonLayout/>}></Route>
            <Route path='/person/:id' element={<Person/>}/>
          </Routes>
        </LanguageContext.Provider>
    </>
  )
}

export default App
