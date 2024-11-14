import './Footer.css'
import facebook_icon from '../../assets/assets/facebook_icon.png'
import twitter_icon from '../../assets/assets/twitter_icon.png'
import youtube_icon from '../../assets/assets/youtube_icon.png'
import instagram_icon from '../../assets/assets/instagram_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-icons">
        <img srcSet={facebook_icon} alt="" />
        <img srcSet={twitter_icon} alt="" />
        <img srcSet={youtube_icon} alt="" />
        <img srcSet={instagram_icon} alt="" />

      </div>
      <ul>
        <li>Audio Description</li>
        <li>Help Centre</li>
        <li>Gift Cards</li>
        <li>Media Centre</li>
        <li>Jobs</li>
        <li>Terms of use</li>
        <li>Privasy</li>
        <li>Contact Us</li>
        <li>Gift Cards</li>
        <li>Media Centre</li>
        <li>Jobs</li>
      </ul>
      <p className='copyright-text'>@ 1997-2023 Netflix, Inc.</p>

    </div>
  )
}

export default Footer