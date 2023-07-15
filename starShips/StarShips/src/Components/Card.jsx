export default function Card({ data }){
    return(
        <div className='container'>
            {data.map((element,i)=>(
                <div className='card'>
                    <p key={i}>{element.name}</p>
                </div>
            ))}
        </div>
    )
}