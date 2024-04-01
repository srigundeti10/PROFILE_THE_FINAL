import React from 'react'
import './Portfolio.css'
import Img1 from '../../images/a.png'
import Img2 from '../../images/b.png'
import Img3 from '../../images/c.png'
import Img4 from '../../images/d.jpg'
import Img5 from '../../images/e.png'
import Img6 from '../../images/f.png'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
      <artical className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={Img5} alt="portfolio image 1" />
          </div>
          <h3>Optimizing Charging Time of EV’s</h3>
          <h4> Jan. 2024 - Ongoing </h4>
          <br></br>
          <div className="portfolio__item-cta">
            <a href="https://drive.google.com/file/d/1A242I9mi9xersJb-1igdKdNeSXtSqlCO/view?usp=sharing" className="btn" target='_blank'>Download Work</a>
            {/* <a href="https://github.com" className="btn btn-primary" target='_blank'>Github Demo</a> */}
          </div>
        </artical>
        <artical className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={Img1} alt="portfolio image 1" />
          </div>
          <h3>Smart Assistant</h3>
          <br></br>
          <h4> Nov. 2022 - Apr. 2023 </h4>
          <br></br>
          <div className="portfolio__item-cta">
            <a href="https://drive.google.com/drive/folders/1ybX_2XOZhqdVBYsFds92V6H7tj896H2E?usp=sharing" className="btn" target='_blank'>Download Work</a>
            <a href="https://github.com/srigundeti10/Smart-Assistant.git" className="btn btn-primary" target='_blank'>Github Demo</a>
          </div>
        </artical>
        <artical className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={Img2} alt="portfolio image 1" />
          </div>
          <h3>Parallel Parking Problem</h3>
          <br></br>
          <h4> July. 2023 - Ongoing </h4>
          <br></br>
          <div className="portfolio__item-cta">
            <a href="https://drive.google.com/drive/folders/1hzz_RuXsv5UkujIhGrOXnq4W0vHFlfPk?usp=sharing" className="btn" target='_blank'>Download Work</a>
            <a href="https://github.com/srigundeti10/Parallel-Parking-Problem.git" className="btn btn-primary" target='_blank'>Github Demo</a>
          </div>
        </artical>
        <artical className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={Img3} alt="portfolio image 1" />
          </div>
          <h3>CAM Profiling</h3>
          <br></br>
          <h4> April 2023 </h4>
          <br></br>
          <div className="portfolio__item-cta">
            <a href="https://drive.google.com/drive/folders/18_jcss3RyddA4C_mQwzkb7-9GI4x5Tjg?usp=sharing" className="btn" target='_blank'>Download Work</a>
            <a href="https://github.com/srigundeti10/CAM-Profiling.git" className="btn btn-primary" target='_blank'>Github Demo</a>
          </div>
        </artical>
        <artical className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={Img4} alt="portfolio image 1" />
          </div>
          <h3>Analysis & Machining</h3>
          <br></br>
          <h4> Sep. 2023 - Nov. 2023 </h4>
          <br></br>
          <div className="portfolio__item-cta">
            <a href="https://drive.google.com/drive/folders/1rePWHzAYnqnvTMAFgpL5QCi4t-iiFBxe?usp=sharing" className="btn" target='_blank'>Download Work</a>
            <a href="https://github.com/srigundeti10/Analysis-Machining.git" className="btn btn-primary" target='_blank'>Github Demo</a>
          </div>
        </artical>
        <artical className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={Img6} alt="portfolio image 1" />
          </div>
          <h3>Simulation of Mechanisms</h3>
          <br></br>
          <h4> March 2022 </h4>
          <br></br>
          <div className="portfolio__item-cta">
            <a href="https://drive.google.com/drive/folders/1p8cX89EBxco2XsC5Es459OwPvR-AClY0?usp=sharing" className="btn" target='_blank'>Download Work</a>
            <a href="https://github.com/srigundeti10/Linkage-Project.git" className="btn btn-primary" target='_blank'>Github Demo</a>
          </div>
        </artical>
      </div>
    </section>
  )
}

export default Portfolio