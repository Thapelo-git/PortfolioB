import React, { useState } from 'react'
import portfolio from '../asserts/images/medico.jpg';
import portfolio1 from '../asserts/images/hotelimg.jpg';
import portfolio2 from '../asserts/images/prison.jpg';
import MobileItems from './ProjectFiles/MobileItems';
import WebItems from './ProjectFiles/WebItems';
import AllItems from './ProjectFiles/AllItems';
function Portfolio() {
    const [but,setBut]=useState(0);
  return (
    <section id='project' className='portfolio'>
        <div className='container mb-5'>
            <div className='row text-center mt-5  '>
                <h1>My Project</h1>
                <div ></div>
                {/* buttons */}
                <div className='row mt-5 mb-5 g-4 text-center'>
                    <div className='col-lg-12 '>
                        <button className ={but===0?('btn bg-primary text-white'):('btn btn-outline-primary')} type='button'
                onClick={()=>setBut(0)}>all</button>
                        
                <button className ={but===1?('btn bg-primary text-white'):('btn btn-outline-primary')} type='button'
                onClick={()=>setBut(1)}>mobile apps</button>
               
                
               <button className ={but===2?('btn bg-primary text-white'):('btn btn-outline-primary')} type='button'
                onClick={()=>setBut(2)}>websites</button>
                        {/* <button className ={but===3?('btn bg-primary text-white'):('btn btn-outline-primary')} type='button'
                onClick={()=>setBut(3)}>design</button> */}
                    </div>
                </div>
                {
                    but == 0?( <AllItems/>):(<></>)
                }
                {
                    but == 1?( <MobileItems/>):(<></>)
                }
                {
                    but == 2?( <WebItems/>):(<></>)
                }
            </div>
        </div>
    </section>
  )
}

export default Portfolio