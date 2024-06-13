import React from 'react'
import Society from '../ProjectFiles/e-societyA.jpg'
import medico from '../ProjectFiles/medico.jpg'
import hotel from '../ProjectFiles/hotelimg.jpg'
import prison from '../ProjectFiles/prison.jpg'
function AllItems() {
  return (
    <div className='row'>
        <div className='col-lg-4 col-md-6 g-5'>
        <div className='portfolio-box shadow'>
        <img src={Society} alt='portfolio' title='society'/>
        <div className='portfolio-infor'>
            <div className='caption'>
                <h4>E-society Administrator</h4>
                <p>
                Managing Payments and Events 
                </p>
                <a href='https://github.com/Thapelo-git/e-societyAdmin-master'><h4 className='text-white   capitalize'>View Project</h4></a>
            </div>
        </div>
        </div>
    </div>
    <div className='col-lg-4 col-md-6  g-5'>
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
    <div className='col-lg-4 col-md-6 g-5'>
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
    <div className='col-lg-4 col-md-6 g-5'>
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

export default AllItems