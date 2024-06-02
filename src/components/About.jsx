import React from 'react'
import Aboutimg from '../asserts/images/landscape.jpg'
import ViewWorkBtn from './ViewWorkBtn'
function About() {
  return (
    <div className='bg-dark text-light py-5' id='about'>
        <div className='container'>
            <div className='flex-column-reverse flex-md-row row'>
                <div className='col-md-6 mt-6 mt-md-0 d-flex
                flex-column justify-content-center 
                align-items-center'>
                    <img className='img-fluid w-75 shadow'
                    src={Aboutimg} alt='about img'/>
                </div>
                <div className='col-md-6 d-flex
                flex-column justify-content-center'>
                    <h2 className='mb-5'>About me</h2>
                    <p className='text-start'>
                        jfhuefeyfge fbb dbdb xhduhf
                    </p>
                    <p className='text-start mb-0'>
                        jfhuefeyfge fbb dbdb xhduhf
                    </p>
                    <ViewWorkBtn/>
                </div>
            </div>

        </div>
    </div>
  )
}

export default About