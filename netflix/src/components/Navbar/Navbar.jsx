import {useEffect, useRef } from 'react'
import './Navbar.css'
import logo from "../../assets/assets/logo.png"
import search_icon from "../../assets/assets/search_icon.svg"
import bell_icon from "../../assets/assets/bell_icon.svg"
import profile_icon from "../../assets/assets/profile_img.png"
import caret_icon from "../../assets/assets/caret_icon.svg"
import { logout } from '../../firebase'


const Navbar = () => {
  const navref = useRef()
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      if (window.scrollY >= 80) {
        navref.current.classList.add('nav-dark')
        
      }
      else{
        navref.current.classList.remove('nav-dark')

      }
    } )
  },[])
  return (
    <div ref={navref} className='navbar'>
      <div className="navbar-left">
        <img srcSet={logo} alt=""  className='logo'/>
        <ul>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>News & Popular</li>
          <li>My List</li>
          <li>Browse by Languages</li>
        </ul>
      </div>
      <div className="navbar-right">
        <img srcSet={search_icon} alt=""  className='icons'/>
        <p>Children</p>
        <img srcSet={bell_icon} alt='' />
        <div className="navbar-profile">
              <img srcSet={profile_icon} className='profile' />
              <img srcSet={caret_icon} />
              <div className="dropdown">
                <p onClick={()=>{logout()}}>sign out of Netflix</p>
              </div>

        </div>
      
        
      </div>
        
    </div>
  )
}

export default Navbar