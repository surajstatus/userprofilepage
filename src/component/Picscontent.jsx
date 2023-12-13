import React from 'react'
import pic from '../image/pic.png'
import '../style/Picscontent.css'

const Picscontent = () => {
  return (
    <>
        <div className="pic-main" id='nav'>
            <div className='pic-alt'>
                <img src={pic} alt='' />
            </div>
            <div className='text'>
                <div className='big-text'>I am web Developer</div>
                <div className='small-text'>
                    with one year of experience specializing in HTML5, JavaScript, MySQL, CSS, Database design, and front-end development.
                    Adept at collabration with dynamic teams to build high-quality Websites and identify opportunities to enhance the user experience.
                </div>
            </div>
        </div>
    </>
  )
}

export default Picscontent
