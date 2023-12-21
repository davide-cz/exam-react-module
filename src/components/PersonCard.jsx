
import {Link} from 'react-router-dom'

export default function ({id,name,occupation,sex,popularity,works,imgPath}){
    
    
    return(
        <>
             <Link to={`/person/${id}`}>
                <h3>{name}</h3>
             </Link>
            <h2>{occupation}</h2>
            <p>{sex}</p>
            <p>{popularity}</p>
            <div>
                {works && 
                    <div>
                        <h4>Famous Works:</h4>
                            <ul>{works.map((w,i)=>{
                                return (
                                    <li key={`${w}${i}`}>
                                        {w.title}
                                    </li>
                                )
                            })}</ul>
                    </div>
                }

            </div>
            <figure>
                <img src={imgPath} alt="" />
            </figure>
        </>
    )
}