import React from 'react'
import './Header.css'
import CTA from './CTA'
import ME from '../../images/Screenshot 2024-08-30 123921.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Gundeti Srivardhan</h1>
        <h3 className="text-light"> Mechanical Engineer | IIT Guwahati </h3>
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