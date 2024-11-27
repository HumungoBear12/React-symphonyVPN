import React from 'react'
import Tools from './tools'
import Icon from '../Images/Icon.webp'
import Andrew from '../Images/IMG_3462.jpg'
import Kelly from '../Images/Kelly.JPEG'
import Cameron from '../Images/Cameron.jpeg'
const Overview = () => {
  return (
    <div className='Overview'>
        <div className='flex3'>
            <div className='three'>
                <h1 style={{fontWeight:'bolder', fontSize:'1.4rem', fontFamily:'Future'}}>Overview of the Project</h1>
                <p style={{marginTop:'1rem',}}>Symphony VPN is a prototype VPN project aimed at providing secure remote access, integrating multi-factor authentication (MFA), and incorporating ransomware detection and mitigation. It also enforces strict management of administrative credentials for enhanced security. Built with Python, the project follows Scrum methodology, focusing on iterative development, goal alignment, and efficient task management. The team strives to create a resilient infrastructure that ensures robust protection for sensitive information while maintaining scalability and meeting stakeholder needs through structured milestones and deadlines.</p> 
                <br />
                <br />
                <h1 style={{fontWeight:'bolder', fontSize:'1.4rem', fontFamily:'Future'}}>Vision Statment </h1>
                <p style={{marginTop:'1rem'}}>"To create a resilient and robust infrastructure by ensuring secure remote access through a VPN, safeguarding systems with multi-factor authentication, proactively detecting and mitigating ransomware threats, and lastly enforcing strict management of administrative credentials, all to protect sensitive information and uphold the highest standards of security"
                </p>
            </div>
            <img src={Icon} alt="" />
        </div>
        <h3 style={{fontWeight:'bolder',fontSize:'1.4rem', fontFamily:'Future'}}>Tools and Techniques</h3>
        <hr />
        <Tools/>
        
        <div className='Video'>
            <h3 style={{fontFamily:'Future', padding:'15px'}}>Video Demonstration</h3>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/GJat8__4dyQ?si=ygOG8RWh4yyZBl0G" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        <h2 style={{fontWeight:'bolder',fontSize:'1.4rem', fontFamily:'Future'}}>Symphony VPN Development Process</h2>
        <hr />
        <div className='Flex1'>
            <div>
            <div className='Goal'>
                    <h4 style={{fontFamily:'Future'}}>Our Purpose</h4>
                    <p>Our goal is to develop and configure a secure VPN that incorporates multi-factor authentication (MFA) for enhanced security, employs admin credentials to enforce robust access control, and integrates ransomware detection and mitigation measures to safeguard against potential threats, ensuring a resilient and secure network infrastructure.
                    </p>
                </div>
                <br />  
                <br />
                <div className='Goal'>
                    <h4 style={{fontFamily:'Future'}}>Execution Strategy Summary</h4>
                    <p>Engage stakeholders through interviews and workshops to define clear requirements. Employ Scrum for structured sprints with reviews and Kanban for real-time task tracking. Develop a detailed timeline by breaking down tasks, estimating durations, and sequencing milestones for efficient project delivery.</p>
                </div>            
            </div>
            <div>
                <div className='Goal'>
                    <h4 style={{fontFamily:'Future'}}>Project Scope</h4>
                    <p> 
                    The VPN setup includes MFA and ransomware detection, establishing milestones and deadlines. Schedule development involves task breakdown (e.g., MFA configuration), estimating durations, identifying dependencies, and creating a timeline. This structured approach ensures efficiency and alignment, enabling timely and successful project completion while meeting stakeholder expectations.
                    </p>
                </div>
                <br />
                <div className='Goal'>
                    <h4 style={{fontFamily:'Future'}}>Scrum Management Methodology</h4>
                    <p> The project lifecycle begins with defining goals and features with stakeholders, followed by sprint planning during the planning phase. Execution involves iterative sprints and development, while monitoring and control focus on tracking progress using backlogs and charts. Finally, the project closes by delivering the final set of features.
                    </p>
                </div>
            </div>
        </div>
        <br />
        <h2 style={{textAlign:'center', padding:'15px', fontSize:'3rem', fontWeight:'bolder', fontFamily:'Future',marginBottom:'1rem'}}>The Symphony Team</h2>
        <div className='Team'>
            <div className='flexRow'>
                <div>
                    <div className='flexVert'>
                    <img src={Kelly} alt="" />
                            <p><strong>Arkelly Mugisha Kigoma</strong></p>
                            <p><strong>Title: </strong>Team Leader/VPN Architect</p>
                            <p><strong>Major: </strong>Cyber-Security</p>
                            <p><strong>Graduation Data:</strong> Fall 2024 </p>
                            <a href="https://www.linkedin.com/in/arkelly-mugisha-kigoma-b77796212/" target="_blank"rel="noreferrer">LinkedIn</a>
                    </div> 
                </div>

                <div>
                    <div className='flexVert'>
                        <img src={Cameron} alt="" />
                        <p><strong>Cameron Teixidor</strong> </p>
                        <p><strong>Title:</strong> Security Specialist/Network Administrator</p>
                        <p><strong>Major:</strong> Cyber-Security </p>
                        <p><strong>Graduation Data:</strong> Fall 2024 </p>
                        <a href="https://www.linkedin.com/in/cameron-teixidor-8948112b2/" target="_blank"rel="noreferrer">LinkedIn</a>
                    </div>
                </div>
                    
                <div>
                    <div className='flexVert'>
                        <img src={Andrew} alt="" />                  
                        <p><strong>Andrew Makris</strong></p>
                        <p><strong>Title:</strong> Web Developer/Security Specialist</p>
                        <p><strong>Major:</strong> Cyber-Security</p>
                        <p><strong>Graduation Data:</strong> Fall 2024</p>
                        <a href="https://www.linkedin.com/in/andrew-makris-441969258/" target="_blank"rel="noreferrer">LinkedIn</a>
                    </div>
                </div>
                
            
            </div>
        </div>
        <br />
    </div>
  )
}

export default Overview