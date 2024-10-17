import React from 'react'
import Logo from '../Images/Symp.webp'
import Team from '../Components/team'
import Ransom from '../Components/ransom'
import MFA from '../Components/mfa'
import Admin from '../Components/admin'
import Footer from '../Components/footer'
import VPN from '../Components/vpn'
import Scope from '../Components/scope'


const Home = () => {
  return (
    <div className='Container-Home'>
      <h2><strong>Symphony VPN</strong></h2>
      {/* <hr/> */}
      <br/>
      <h3 id='overview'>Overview</h3>
      <hr/>
      <div className='flex'>
        <div style={{ padding: '15px' }}>
          <p>The <strong>Symphony VPN</strong> project is a senior IT initiative at Grand Canyon University (GCU), led by Arkelly, Andrew, and Cameron. Its goal is to design a secure Virtual Private Network (VPN) solution focused on cybersecurity resilience.</p>
          <ul>
            <li><strong>Key Features:</strong></li>
            <br/>
            <ul>
              <li  style={{lineHeight:'1.4rem'}}>- Multi-factor authentication (MFA)</li>
              <li  style={{lineHeight:'1.4rem'}}>- Ransomware detection</li>
              <li  style={{lineHeight:'1.4rem'}}>- Robust credential management</li>
            </ul>
            <br/>
            <li  style={{lineHeight:'1.4rem'}}><strong>Methodology:</strong> Scrum</li><br/>
            <li style={{lineHeight:'1.4rem'}}><strong>Team Members:</strong> Arkelly (Team Leader), Andrew, Cameron</li>
          </ul>
          <br/>
          <p>The project follows the Scrum methodology, emphasizing iterative development and collaboration. This approach allows the team to break the project into manageable sprints for frequent updates based on testing and feedback.</p>

          <p>By combining advanced security features with an agile framework, Symphony VPN aims to provide a scalable and efficient solution that enhances cybersecurity while ensuring user accessibility.</p>
        </div>
      <img src={Logo} alt=''></img>
      </div>
      <h3 id='team'>Team Members</h3>
      <hr/>
      <Team/>
      <h3 id='methodolgy'>Methodology</h3>
      <hr/>
      <div className='flex'>
      <div style={{ padding: '15px', width: '50%' }}>
        <p>The <strong>Symphony VPN</strong> project employs the Scrum framework for an agile, collaborative approach to developing a secure VPN solution. It begins with <strong>Initiation</strong>, where the team defines goals and features, including multi-factor authentication (MFA), ransomware detection, and credential management, in consultation with stakeholders.</p>

        <ul>
          <li style={{fontSize:'1.4rem'}}><strong>Project Phases:</strong></li>
          {/* <hr style={{width:'50%'}}/> */}
          <br/>
          <ul>
            <li style={{lineHeight:'1.4rem'}}>- <strong>Initiation:</strong> Define goals and features</li>
            <li style={{lineHeight:'1.4rem'}}>- <strong>Planning:</strong> Sprint Planning Meeting</li>
            <li style={{lineHeight:'1.4rem'}}>- <strong>Execution:</strong> Sprints and Development</li>
            <li style={{lineHeight:'1.4rem'}}>- <strong>Monitor & Control:</strong> Backlog and Charts</li>
            <li style={{lineHeight:'1.4rem'}}>- <strong>Close:</strong> Deliver final features</li>
          </ul>
          <br />
        </ul>
        <p>This project emphasizes iterative development and collaboration, breaking down tasks into manageable sprints for frequent updates based on feedback.</p>

        <p>The goal is to create a scalable, secure infrastructure that ensures safe remote access through the VPN, with MFA, proactive ransomware detection, and strict credential management to protect sensitive information.</p>
      </div>

      <img src='https://static.vecteezy.com/system/resources/previews/002/119/514/original/scrum-process-development-methodology-icon-vector.jpg' alt=''></img>
      </div>
      <h3 id='scope'>Scope and Schedule</h3>
      <hr/>
      <Scope/>

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