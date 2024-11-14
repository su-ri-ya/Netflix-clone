import './Home.css'
import Navbar from '../../Navbar/Navbar'
import Footer from '../../Footer/Footer'
import hero_banner from '../../../assets/assets/hero_banner.jpg'
import hero_title from '../../../assets/assets/hero_title.png'
import play_icon from '../../../assets/assets/play_icon.png'
import info_icon from '../../../assets/assets/info_icon.png'
import TitleCards from '../../TitleCards/TitleCards'



const Home = () => {
  return (
    <div className='home'>
      <Navbar />
      <div className="hero">
        <img srcSet={hero_banner} alt=""  className='banner-img'/>
        <div className="hero-caption">
          <img srcSet={hero_title} alt="" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi accusamus eaque accusantium reiciendis temporibus dolorum praesentium numquam laudantium. Distinctio, minima. Voluptate placeat nostrum aspernatur dolor accusantium eos officia assumenda deleniti.</p>
          <div className="hero-btn">
            <button className='btn'><img src={play_icon} alt="" />play</button>
            <button className='btn dark-btn'><img src={info_icon} alt="" />more info</button>
          </div>
          <TitleCards  />

        </div>
      </div>
      <div className="more-cards">
        <TitleCards title={"blockbuster Movies"} category={"top_rated"}/>
        <TitleCards title={"only on Netflix"}  category={"popular"} />
        <TitleCards title={"upcoming"} category={"upcoming"} />
        <TitleCards title={"top picks for you"} category={"now_playing"}/>
      </div>
      <Footer />
      
    
    </div>
  )
}

export default Home