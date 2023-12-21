import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import PersonCard from "./PersonCard"

const apiKey=import.meta.env.VITE_API_KEY


export default function (){
    
    const queryRequest= new URLSearchParams({
      api_key:apiKey,
    
    }) 
    // fetch per id  `https://api.themoviedb.org/3/person/{person_id}`

let {id}  =  useParams()

const [pers,setPers]=useState({})

    useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/person/${id}?${queryRequest.toString()}`)
        .then(response=>response.json())
        .then(obj=>setPers(obj))
    },[ id ])
    
    return (
        <>
             <PersonCard key={pers.id}
                        id={pers.id}
                        name={pers.name}
                        occupation={pers.known_for_department}
                        sex={pers.gender === 1 ? 'Female' : 'Male' }
                        popularity={pers.popularity}
                        imgPath={`https://image.tmdb.org/t/p/w500/${pers.profile_path}`}
                    />
        </>
    )
}