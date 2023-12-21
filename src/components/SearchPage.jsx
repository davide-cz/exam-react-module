import { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import PersonCard from "./PersonCard";
import LanguageContext from './LanguageContext'
import { useContext } from 'react'



const apiKey=import.meta.env.VITE_API_KEY



export default function (){

    const [error,setError]=useState('')
    
    const [peopleArray,setPeopleArray]=useState([])
    
    const language=useContext(LanguageContext)
    
    const [searchValue,setSearchValue]=useState('')
    
    const queryRequest= new URLSearchParams({
    api_key:apiKey,
    query:searchValue,
    language:language
    })

    useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/search/person?${queryRequest.toString()}`)
        .then(response=>response.json())
        .then(obj=>{setPeopleArray(obj.results)})
        .catch(error=>{setError('there was an Error try again')
            console.error(error)})

    },[searchValue,language])
    
    return(
        <>{error ? <div>{error}</div>

        : <div>
            <SearchBar
              onSearch= {(searchValue)=>{setSearchValue(searchValue)}}
            />
            
            {peopleArray.length===0 ?
                 <p>Please, search for something valid</p>:
                peopleArray.map((pers)=>{
                    return(
                        <PersonCard key={pers.id}
                        id={pers.id}
                        name={pers.name}
                        occupation={pers.known_for_department}
                        sex={pers.gender === 1 ? 'Female' : 'Male' }
                        popularity={pers.popularity}
                        works={pers.known_for}
                        imgPath={`https://image.tmdb.org/t/p/w500/${pers.profile_path}`}
                        />
                    
                        )
                    })
                }

        </div>}
        </>
    )
}