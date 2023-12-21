import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import PersonCard from "./PersonCard"
import LanguageContext from './LanguageContext'
import { useContext } from 'react'
import './Person.scss'


const apiKey=import.meta.env.VITE_API_KEY


export default function (){
    
    const language=useContext(LanguageContext)
   
const queryRequest= new URLSearchParams({
    api_key:apiKey,
    language:language
  }) 
  
    // fetch per id  `https://api.themoviedb.org/3/person/{person_id}`

let {id}  =  useParams()

const [pers,setPers]=useState({})

const [error,setError]=useState('')

    useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/person/${id}?${queryRequest.toString()}`)
        .then(response=>response.json())
        .then(obj=>setPers(obj)).catch(error=>{setError('there was an Error try again')
        console.error(error)})
    },[ id,language ])
    
    console.log(pers)

    const person={name:pers.name,
                gender:pers.gender === 1 ? 'Female' : 'Male', 
                occupation:pers.known_for_department,
                profile_path:pers.profile_path , 
                biography:pers.biography}
    return (
        <>{error ? <div>{error}</div>

        : 
            <div className="person-card">
                    <figure>
                        <img className='prof-pic' src={`https://image.tmdb.org/t/p/w500/${pers.profile_path}`} alt="" />
                    </figure>
                <div>
                    <h2>{person.name}</h2>
                    <h4>Field: {person.occupation}</h4>
                    <p>Gender: {person.gender}</p>
                    <p>Age=</p>
                    <p>{person.biography}</p>
                </div>
            </div>}
        </>
    )
}