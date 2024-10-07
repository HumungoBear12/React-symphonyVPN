import React from 'react'
import Logo from '../Images/Logo.jfif'
import Team from '../Components/team'


const Home = () => {
  return (
    <div className='Container-Home'>
      <h2><strong>Symphony VPN</strong></h2>
      {/* <hr/> */}
      <h3 id='overview'>Overview</h3>
      <hr/>
      <div className='flex'>
      <div style={{ padding: '15px' }}  >
      <p>The <strong>Symphony VPN</strong> project is a senior IT initiative at Grand Canyon University (GCU), led by a team of students, including our team leader Arkelly, Andrew, and Cameron. The project’s goal is to design and configure a secure Virtual Private Network (VPN) solution tailored for organizational use, with a focus on cybersecurity resilience.</p>
      <ul>
          <li><strong>Key Features:</strong></li>
          <ul>
              <li>- Multi-factor authentication (MFA) for enhanced security</li>
              <li>- Ransomware detection to mitigate cyber threats</li>
              <li>- Robust administrative credential management to ensure secure access</li>
          </ul>
          <br/>
          <li><strong>Methodology:</strong> Scrum</li><br/>
          <li><strong>Team Members:</strong><br/> - Arkelly (Team Leader)<br/>- Andrew<br/>- Cameron</li>
      </ul>
      <br/>
      <p>The project follows the Scrum methodology, emphasizing iterative development, continuous feedback, and collaboration among team members. Scrum enables the team to break down the project into manageable sprints, allowing for frequent updates and adjustments based on testing and stakeholder input.</p>

      <p>The combination of cutting-edge security features with an agile approach ensures that Symphony VPN will deliver a highly secure and adaptable solution to meet the evolving needs of users. As the team progresses through the project phases, the focus remains on creating a scalable, efficient VPN system that enhances cybersecurity defenses while maintaining user accessibility and administrative control.</p>
      </div>

      <img src={Logo} alt=''></img>
      </div>
      <h3 id='team'>Team Members</h3>
      <hr/>
      <Team/>
      <h3 id='methodolgy'>Methodology</h3>
      <hr/>
      <div className='flex'>
      <div style={{ padding: '15px' , width:'50%'}}>
          <p>The <strong>Symphony VPN</strong> project follows the Scrum framework, ensuring an agile and collaborative approach to developing a secure and resilient VPN solution. The project begins with <strong>Initiation</strong>, where the team defines project goals and key features, including multi-factor authentication (MFA), ransomware detection, and administrative credential management, in consultation with stakeholders.</p>
          
          <ul>
              <li><strong>Project Phases:</strong></li>
              <ul>
                  <li>- <strong>Initiation:</strong> Define project goals and key features with stakeholders</li>
                  <li>- <strong>Planning:</strong> Sprint Planning Meeting</li>
                  <li>- <strong>Execution:</strong> Sprints and Development</li>
                  <li>- <strong>Monitor & Control:</strong> Backlog and Charts</li>
                  <li>- <strong>Close:</strong> Delivering the last set of features</li>
              </ul>
              <br />
              <li><strong>Methodology:</strong> Scrum</li>
          </ul>
          <br />
          
          <p>The project emphasizes iterative development, continuous feedback, and collaboration among team members. Scrum enables the team to break down the project into manageable sprints, allowing for frequent updates and adjustments based on testing and stakeholder input.</p>
          
          <p>The aim is to create a scalable, flexible, and secure infrastructure that ensures safe remote access through a VPN. With MFA, proactive ransomware detection, and strict management of administrative credentials, the solution is designed to protect sensitive information and uphold the highest standards of cybersecurity.</p>
      </div>
      <img src='https://static.vecteezy.com/system/resources/previews/002/119/514/original/scrum-process-development-methodology-icon-vector.jpg' alt=''></img>
      </div>

      <h3 id='vpn'>VPN Configuration</h3>
      <hr/>
      <h3 id='ransom'>Ransomware Detection Implementation</h3>
      <hr/>
      <h3 id='mfa'>MFA Implementation</h3>
      <hr/>
      <h3 id='admin'>Admin Credential Implementation</h3>
      <hr/>
    </div>
  )
}

export default Home