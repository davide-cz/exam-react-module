import { useEffect, useState } from "react"
import PersonCard from "./PersonCard"
import LanguageContext from './LanguageContext'
import { useContext } from 'react'


export default function (){
    
    //fetch con i personaggi pop di oggi
    
    
    const apiKey=import.meta.env.VITE_API_KEY
    
    const language=useContext(LanguageContext)
    const queryRequest= new URLSearchParams({
      api_key:apiKey,
      language:language
    })

    const [personArray,setPersonArray]=useState([])
    const [error,setError]=useState('')

    useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/trending/person/day?${queryRequest.toString()}`)
            .then(response=>response.json())
            .then(obj=>setPersonArray(obj.results))
            .catch(error=>{setError('there was an Error try again')
                            console.error(error)})
    },[language])

    
    console.log(personArray)
    return(
        <>{error ? <div>{error}</div>

            : <div>
                <h3>Most Famous Person Right Now:</h3>
                <div className="people-reel">
                    {personArray.map((pers)=>{
                        return(
                            <PersonCard className='person-card'
                                key={pers.id}
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

                </div>

            </div>
                }
        
                
        </>
    )
}
