import React from 'react'
import Aboutimg from '../asserts/images/landscape.jpg'
import ViewWorkBtn from './ViewWorkBtn'
function About() {
  return (
    <div className='bg-dark text-light py-5' id='about'>
        <div className='container'>
            <div className='flex-column-reverse flex-md-row row'>
                <div className='col-md-6 mt-5 mt-md-0 d-flex
                flex-column justify-content-center 
                align-items-center'>
                    <img className='img-fluid w-75 shadow'
                    src={Aboutimg} alt='about img'/>
                </div>
                <div className='col-md-6 d-flex
                flex-column justify-content-center'>
                    <h2 className='mb-5'>About me</h2>
                    <p className='text-start'>
                    Prior experience in web development covers 
                    React.js, HTML, CSS, Javascript, Bootstrap, Tailwind CSS .
                    This technologies enable me to create dynamic and responsive web application
                     that cater to modern user expectations .
                    
                    </p>
                    <p className='text-start mb-5'>
                    Looking forward to contributing to transformative digital experiences
                    </p>
                    <ViewWorkBtn/>
                </div>
            </div>

        </div>
    </div>
  )
}

export default About