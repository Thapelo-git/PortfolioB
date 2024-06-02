import React from 'react'
import ViewWorkBtn from './ViewWorkBtn'
import HeaderImg from '../asserts/images/Pro.jpeg'

function Header() {
  return (
    <header className='pt-5 id=header'>
        <div className='container py-md-5'>
            <div className='row'>
                <div className='col-md-6 d-flex flex-column 
                align-items-start justify-content-center mt-5
                mt-md-0'>
                        <h3 className='text-secondary fw-bold lh-1'>
                            Thapelo Chaba
                        </h3>
                    <h1 className='text-capitalize text-start text-primary 
                    lh-1 mb-5'>
                        Front end <br/>
                        web developer
                    </h1>
                    <ViewWorkBtn/>
                </div>
                <div className='col-md-6 d-flex 
                 justify-content-center justify-content-md-end'></div>
                 <img className='img-fluid w-75 rounded-circle 
                 shadow my-5 mx-5'
                 src={HeaderImg} alt='header img'/>
            </div>
        </div>
    </header>
    
  )
}

export default Header
