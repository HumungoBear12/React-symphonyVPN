import React from 'react'
import Footer from '../Components/footer'
import Overview from '../Components/Overview'


const Home = () => {
  return (
    <div className='Container-Home'>
        <div className='Nav'>
          <h2><strong>Symphony VPN</strong></h2>
        </div>
        <Overview/>
        <Footer/>
    </div>
  )
}

export default Home