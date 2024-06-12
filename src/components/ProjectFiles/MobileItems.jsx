import React from 'react'
import medico from '../ProjectFiles/medico.jpg'
import hotel from '../ProjectFiles/hotelimg.jpg'
import prison from '../ProjectFiles/prison.jpg'
function MobileItems() {
  return (
     <div className='row'>
    <div className='col-lg-4 col-md-6 '>
        <div className='portfolio-box shadow'>
        <img src={medico} alt='portfolio' title='medico'/>
        <div className='portfolio-infor'>
            <div className='caption'>
                <h4>Medico App</h4>
                <p>
                Medico connects students with access to first aid and health measures 
                </p>
                <a href='https://github.com/washington786/medico'><h4 className='text-white   capitalize'>View Project</h4></a>
            </div>
        </div>
        </div>
    </div>
    <div className='col-lg-4 col-md-6'>
        <div className='portfolio-box shadow'>
    <img src={hotel} alt='portfolio' title='medico'/>
        <div className='portfolio-infor'>
            <div className='caption'>
                <h4>Hotel App</h4>
                <p>#React Native</p>
                <a href='https://github.com/Thapelo-git/hotelApp'><h4 className='text-white   capitalize'>View Project</h4></a>
                
            </div>
        </div>
        </div>
    </div>
    <div className='col-lg-4 col-md-6'>
        <div className='portfolio-box shadow'>
    <img src={prison} alt='portfolio' title='medico'/>
        <div className='portfolio-infor'>
            <div className='caption'>
                <h4>Prison Management App</h4>
                <p>#React Native</p>
                <a href='https://github.com/Thapelo-git/Prison_Management_System'><h4 className='text-white   capitalize'>View Project</h4></a>
                
            </div>
        </div>
        </div>
    </div>
</div>
  )
}

export default MobileItems