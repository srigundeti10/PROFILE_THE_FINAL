import React from 'react'
import './Experience.css'
import {HiBadgeCheck} from 'react-icons/hi'

const Experience = () => {
  return (
    <section id='experience'>
      <p className='px'> My </p>
      <h2>Skills</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Mechanical Skills</h3>
          <div className="experience__content">
            
            <artical className='experience__details'>
              <br></br>
              <HiBadgeCheck/>
              <div>
               <h4>Ansys</h4>
               <small className='text-light'>Intermediate</small>
              </div>
              
            </artical>

            <artical className='experience__details'>
              <br></br>
              <HiBadgeCheck/>
              <div>
               <h4>CAD</h4>
               <small className='text-light'>Intermediate</small>
              </div>
            </artical>

            <artical className='experience__details'>
              <br></br>
              <HiBadgeCheck/>
              <div>
               <h4>CATIA</h4>
               <small className='text-light'>Intermediate</small>
              </div>
            </artical>

            <artical className='experience__details'>
              <br></br>
              <HiBadgeCheck/>
              <div>
               <h4>Solid Edge</h4>
               <small className='text-light'>Experienced</small>
              </div>
            </artical>

            <artical className='experience__details'>
              <br></br>
              <HiBadgeCheck/>
              <div>
               <h4>Linkage</h4>
               <small className='text-light'>Experienced</small>
              </div>
            </artical>

            <artical className='experience__details'>
              <br></br>
              <HiBadgeCheck/>
              <div>
               <h4>Matlab</h4>
               <small className='text-light'>Beginner</small>
              </div>
            </artical>
            
            <artical className='experience__details'>
              <br></br>
              <HiBadgeCheck/>
              <div>
               <h4>Solid Works</h4>
               <small className='text-light'>Beginner</small>
              </div>
            </artical>
            
            <artical className='experience__details'>
              <br></br>
              <HiBadgeCheck/>
              <div>
               <h4>CFD</h4>
               <small className='text-light'>Beginner</small>
              </div>
            </artical>

          </div>
        </div>
        <div className="experience__backend">
          <h3>Key Courses Taken</h3>
          <div className="experience__content">
            
            <artical className='experience__details'>
              <br></br>
              <HiBadgeCheck/>
              <div>
               <h4>Design of Machine Elements</h4>
               {/* <small className='text-light'>Experienced</small> */}
              </div>
            </artical>

            <artical className='experience__details'>
              <br></br>
              <HiBadgeCheck/>
              <div>
               <h4>Manufacturing Technology</h4>
               {/* <small className='text-light'>Intermediate</small> */}
              </div>
            </artical>

            <artical className='experience__details'>
              <br></br>
              <HiBadgeCheck/>
              <div>
               <h4>Solid Mechanics</h4>
               {/* <small className='text-light'>Experienced</small> */}
              </div>
            </artical>

            <artical className='experience__details'>
              <br></br>
              <HiBadgeCheck/>
              <div>
               <h4>Kinematics of Machinery</h4>
               {/* <small className='text-light'>Intermediate</small> */}
              </div>
            </artical>
            
            <artical className='experience__details'>
              <br></br>
              <HiBadgeCheck/>
              <div>
               <h4>Electric Machines</h4>
               {/* <small className='text-light'>Intermediate</small> */}
              </div>
            </artical>
            
            <artical className='experience__details'>
              <br></br>
              <HiBadgeCheck/>
              <div>
               <h4>Heat Transfer</h4>
               {/* <small className='text-light'>Intermediate</small> */}
              </div>
            </artical>
            
            <artical className='experience__details'>
              <br></br>
              <HiBadgeCheck/>
              <div>
               <h4>Machine Drawing</h4>
               {/* <small className='text-light'>Intermediate</small> */}
              </div>
            </artical>
            
            <artical className='experience__details'>
              <br></br>
              <HiBadgeCheck/>
              <div>
               <h4>Fluid Mechanics</h4>
               {/* <small className='text-light'>Intermediate</small> */}
              </div>
            </artical>
            
            <artical className='experience__details'>
              <br></br>
              <HiBadgeCheck/>
              <div>
               <h4>Mechanical Workshop</h4>
               {/* <small className='text-light'>Intermediate</small> */}
              </div>
            </artical>
            
            <artical className='experience__details'>
              <br></br>
              <HiBadgeCheck/>
              <div>
               <h4>Engineering Materials</h4>
               {/* <small className='text-light'>Intermediate</small> */}
              </div>
            </artical>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience