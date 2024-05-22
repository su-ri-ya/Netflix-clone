import React, { useEffect, useState } from 'react'
import './Player.css'
import back_arrow from '../../../assets/assets/back_arrow_icon.png'
import { useNavigate, useParams } from 'react-router-dom'

const Player = () => {

  const {id}=useParams()
  const [apidata,setapidata]=useState({
    name:"",
    key:"",
    published_at:"",
    typeof:""
  })
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNmIxOGM0MGJiNGZjZWViMDIxOTk1NDQ0OWQ5N2UwYiIsInN1YiI6IjY2MzczNTZhMmEwOWJjMDEyOTU5ZmQ3MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9KKrJ6dj3fCGR6Ezc4EYIfRPMo_iNQ_rO_tQyeq6k4U'
    }
  };
  useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
    .then(response => response.json())
    .then(response => setapidata(response.results[0]))

    .catch(err => console.error(err));

  },[])
  const navigate=useNavigate();
 
  return (
    <div className='player'>
      <img src={back_arrow}  alt="" onClick={()=>{navigate(-2)}}/> 
      <iframe width='90%' height='90%'
      src={`https://www.youtube.com/embed/${apidata.key}`}
      title='trailer' frameBorder='0' allowFullScreen></iframe>
      <div className="player-in2fo">
        <p>{apidata.published_at.slice(0,10)}</p>
        <p>{apidata.name}</p>
        <p>{apidata.typeof}</p>
        
        </div>    
    </div>
  )
}

export default Player