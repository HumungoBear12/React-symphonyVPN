import React from 'react'

const Footer = () => {
  return (
    <div className="footer">
        <br />
        <div className="one">
          <h2>Symphony VPN</h2>
          <hr />
          <div >
          <div class="image-container">
            <img src="https://cdn3.iconfinder.com/data/icons/picons-social/57/11-linkedin-256.png" alt="LinkedIn" />
            <a className="text"href="https://www.linkedin.com/in/andrew-makris-441969258/">Arkelly</a>
          </div>
          <div class="image-container">
            <img src="https://cdn3.iconfinder.com/data/icons/picons-social/57/11-linkedin-256.png" alt="LinkedIn" />
            <a className="text"href="https://www.linkedin.com/in/andrew-makris-441969258/">Andrew</a>
          </div>
          <div class="image-container">
            <img src="https://cdn3.iconfinder.com/data/icons/picons-social/57/11-linkedin-256.png" alt="LinkedIn" />
            <a className="text"href="https://www.linkedin.com/in/andrew-makris-441969258/">Cameron</a>
          </div>
          
      </div>
        </div>
        <div className='two'>
          <h4 style={{fontSize:'1.4rem'}}>Symphony VPN Website</h4>
        </div>
        <div className='tee'>
          <h4 style={{fontSize:'1.4rem'}}>@ 2024 Symphony</h4>
        </div>
    </div>
  )
}

export default Footer