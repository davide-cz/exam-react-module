import { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import PersonCard from "./PersonCard";

const apiKey=import.meta.env.VITE_API_KEY


export default function (){
    
    const [searchValue,setSearchValue]=useState('')
    const [peopleArray,setPeopleArray]=useState([])
    
    const queryRequest= new URLSearchParams({
    api_key:apiKey,
    query:searchValue
    })

    useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/search/person?${queryRequest.toString()}`)
        .then(response=>response.json())
        .then(obj=>setPeopleArray(obj.results))

    },[searchValue])
    
    return(
        <>
            <SearchBar
              onSearch= {(searchValue)=>{setSearchValue(searchValue)}}
            />
            {peopleArray.map((pers)=>{
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
            })}
        </>
    )
}