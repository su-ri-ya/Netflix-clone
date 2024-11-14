import { useEffect, useRef, useState } from 'react';
import './TitleCards.css';
import { Link } from 'react-router-dom';


const TitleCards = ({ title, category }) => {
  const [apidata, setApidata] = useState([]);
  const cardsRef = useRef();

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNmIxOGM0MGJiNGZjZWViMDIxOTk1NDQ0OWQ5N2UwYiIsInN1YiI6IjY2MzczNTZhMmEwOWJjMDEyOTU5ZmQ3MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9KKrJ6dj3fCGR6Ezc4EYIfRPMo_iNQ_rO_tQyeq6k4U'
    }
  };

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${category ? category : "now_playing"}?language=en-US&page=1`, options)
      .then(response => response.json())
      .then(response => setApidata(response.results))
      .catch(err => console.error(err));
  }, [category]);

  // Scroll functions
  const scrollLeft = () => {
    cardsRef.current.scrollLeft -= 300; // Adjust this value for scroll distance
  };

  const scrollRight = () => {
    cardsRef.current.scrollLeft += 300; // Adjust this value for scroll distance
  };

  return (
    <div 
      className='title-cards' 
      onMouseEnter={() => cardsRef.current.classList.add('show-buttons')}
      onMouseLeave={() => cardsRef.current.classList.remove('show-buttons')}
    >
      <h2>{title ? title : "Popular on Netflix"}</h2>
      <div className="scroll-button left" onClick={scrollLeft}>◀</div>
      <div className="card-list" ref={cardsRef}>
        {apidata.map((card, index) => (
          <Link to={`/player/${card.id}`} className="card" key={index}>
            <img src={`http://image.tmdb.org/t/p/w500${card.backdrop_path}`} alt={card.original_title} />
            <p>{card.original_title}</p>
          </Link>
        ))}
      </div>
      <div className="scroll-button right" onClick={scrollRight}>▶</div>
    </div>
  );
};

export default TitleCards;
