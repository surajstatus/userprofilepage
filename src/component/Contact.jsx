import React from 'react'
import '../style/Contact.css'
import * as Icons from 'react-bootstrap-icons';

const Contact = () => {
  return (
    <>
      <div className="headline" id='Contact'>Contact</div>
      <div className="c-main">
        <div className="c-box">

          <div className="consec1">
            <div style={{ fontSize: '1.6em', textDecoration: 'underline', padding: '10px 0', fontFamily: 'fantasy' }}>Send a Message</div>

            <form action="">
              <div className="form">
                <div className='fname form-text'>
                  <span>First Name</span>
                  <input type="text" placeholder='Enter Your First Name' required />
                </div>

                <div className="lname form-text">
                  <span>Last Name</span>
                  <input type="text" placeholder='Enter Your Last Name' required />
                </div>

                <div className="email form-text">
                  <span>Email</span>
                  <input type="email" placeholder='Enter Your Email' required />
                </div>

                <div className="mobile form-text">
                  <span>Mobile</span>
                  <div className='tel'>+91<input type="tel" style={{border:'none', margin:'0', width:'200px' }} pattern="^([0-9]{10})$" placeholder='1234567890*' maxLength="10" required /></div>
                </div>

                <div className="message form-text">
                  <span>Message</span>
                  <textarea placeholder='Chat With Us...' required />
                </div>

              </div>
              <div className="send">
                <button type='submit' >Send</button>
              </div>
            </form>
          </div>

          <div className="consec2">
            <div className="conin1">
              <div className='icon-head'>Contact Info</div>

              <div className="up-icon">
                <div className='text-icon'>
                  <Icons.GeoAltFill className="icon" />
                  <span>Vaghoba Nagar, Kalwa East, Thane, Maharashtra, India.</span>
                </div>
                <div className='text-icon'>
                  <Icons.EnvelopeFill className="icon" />
                  <span>surajstatus@gmail.com</span>
                </div>
                <div className='text-icon'>
                  <Icons.TelephoneFill className="icon" />
                  <span>+91 932 096 2340</span>
                </div>
              </div>

              <div className="down-icon">
                <div className="icon">
                  <Icons.Facebook />
                </div>
                <div className="icon">
                  <Icons.Twitter />
                </div>
                <div className="icon">
                  <Icons.Linkedin />
                </div>
                <div className="icon">
                  <Icons.Instagram />
                </div>
              </div>
            </div>
            <div className="conin2">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7536.243237778773!2d72.9986464921391!3d19.189889678152717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7bed7f6bb7f3d%3A0xa4678772922c63a3!2sVaghoba%20Nagar%2C%20Kalwa%2C%20Thane%2C%20Maharashtra%20400605!5e0!3m2!1sen!2sin!4v1696404421003!5m2!1sen!2sin" width="100%" height="100%" style={{border:'0'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">

              </iframe>
            </div>
          </div>
        </div>
      </div>

      {/* <div align='center' style={{display:'flex',alignItems:'center',justifyContent:'center',border:'1px solid white', margin:'50px 0', width:'500px', borderRadius:'40px', height:'100px'}}>
        <p style={{color:'white', position:'absolute', marginTop:'-85px', backgroundColor:'rgb(8, 8, 8)'}}>&nbsp;Full Name *&nbsp;</p>
        <input type='text' placeholder='Enter your Full Name' style={{outline:'none', width:'80%',height:'50%', backgroundColor:'transparent', color:'white', border:'transparent', borderBottom:'1px solid white'}} />
      </div> */}
    </>
  )
}

export default Contact
