import React from 'react'
import Society from '../ProjectFiles/e-societyA.jpg'
import Register from '../ProjectFiles/Register.jpg'
function WebItems() {
  return (
    <div className='row'>
    <div className='col-lg-4 col-md-6 '>
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
 
    <div className='col-lg-4 col-md-6 '>
        <div className='portfolio-box shadow'>
        <img src={Register} alt='portfolio' title='register'/>
        <div className='portfolio-infor'>
            <div className='caption'>
                <h4>Register Administrator</h4>
                <p>
                Managing Students Attendence register and ClassRooms 
                </p>
                <a href='https://github.com/Thapelo-git/ReportSystem.git'><h4 className='text-white   capitalize'>View Project</h4></a>
            </div>
        </div>
        </div>
        </div>
</div>
  )
}

export default WebItems