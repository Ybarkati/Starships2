import { useEffect, useState } from 'react'
import Card from './Components/Card'
import './Styles.css'

function App() {
  
  const[starShips,setStarShips]=useState([])

  async function fetchingData(){
    const url = "https://swapi.dev/api/starships/";
    const response = await fetch(url);
    const data = await response.json();
    setStarShips(data.results);
    // console.log(starShips);
  }

  useEffect(()=>{
    fetchingData()
  },[])


  return (
    <div>
      <h1 className='title'>Star Ships</h1>
      <Card data={starShips} />
    </div>
  )
}

export default App
