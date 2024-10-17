import React from 'react'
import Team from '../Components/team'
import Ransom from '../Components/ransom'
import MFA from '../Components/mfa'
import Admin from '../Components/admin'
import Footer from '../Components/footer'
import VPN from '../Components/vpn'
import Scope from '../Components/scope'
import Overview from '../Components/overview'
import Scrum from '../Components/scrum'


const Home = () => {
  return (
    <div className='Container-Home'>
      <h2><strong>Symphony VPN</strong></h2>
      <br/>
      <Overview/>
      <h3 id='team'>Team Members</h3>
      <hr/>
      <Team/>
      <h3 id='scope'>Scope and Schedule</h3>
      <hr/>
      <Scope/>
      <h3 id='methodolgy'>Methodology</h3>
      <hr/>
      <Scrum/>
      <h3 id='vpn'>VPN Configuration</h3>
      <hr/>
      <VPN/>
      <h3 id='ransom'>Ransomware Detection Implementation</h3>
      <hr/>
      <Ransom/>
      <h3 id='mfa'>MFA Implementation</h3>
      <hr/>
      <MFA/>
      <h3 id='admin'>Admin Credential Implementation</h3>
      <hr/>
      <Admin/>
      <Footer/>
    </div>
  )
}

export default Home