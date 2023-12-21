
import {Link} from 'react-router-dom'

export default function ({id,name,occupation,sex,popularity,works,imgPath}){
    
    
    return(
        <>
        <div className='card'>
            <div>
                <Link className='person-name-link' to={`/person/${id}`}>
                    <h3>{name}</h3>
                </Link>
                <figure >
                    <img className='prof-pic' src={imgPath} alt="" />
                </figure>

            </div>
            <div>
                <h2>{occupation}</h2>
                <p>{sex}</p>
                <p>Popularity:  {popularity}</p>
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

            </div>

        </div>
        </>
    )
}