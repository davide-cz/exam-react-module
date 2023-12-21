export default function ({id,name,occupation,sex,popularity,works,imgPath}){
    
    
    return(
        <>
            <h3>{name}</h3>
            <h2>{occupation}</h2>
            <p>{sex}</p>
            <p>{popularity}</p>
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
            <figure>
                <img src={imgPath} alt="" />
            </figure>
        </>
    )
}