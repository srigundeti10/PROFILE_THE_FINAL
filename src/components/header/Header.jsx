import React from 'react'
import './Header.css'
import CTA from './CTA'
import ME from '../../images/me.jpg'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Gundeti Srivardhan</h1>
        <h5 className="text-light">Frontend Developer and Mechanical Design Engineer</h5>
        <CTA />
        <HeaderSocials/>
        <div className="me">
          <br />
          
          <img src={ME} alt="me"  style={{borderRadius: "1rem 5rem 1rem 5rem"}} />
          <br/>
        </div>
        
      </div>
    </header>
    
  )
}

export default Header