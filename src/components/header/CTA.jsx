import React from 'react'
import CV1 from '../../images/210103130_CV_Final.pdf'
// import CV2 from '../../images/CV_FrontEnd.pdf'

const CTA = () => {
  return (
    <div className="cta">
      <a href={CV1} download className='btn'>Download CV</a>
      {/* <a href={CV2} download className='btn'>Download FrontEnd CV</a> */}
      <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA
