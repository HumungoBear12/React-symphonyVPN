import React from "react";
const Scrum = () => {
    return (
        <div >
            <div className='flex'>
            <div style={{ padding: '15px', width: '50%' }}>
                <p>The <strong>Symphony VPN</strong> project employs the Scrum framework for an agile, collaborative approach to developing a secure VPN solution. It begins with <strong>Initiation</strong>, where the team defines goals and features, including multi-factor authentication (MFA), ransomware detection, and credential management, in consultation with stakeholders.</p>

                <ul>
                <li style={{fontSize:'1.4rem'}}><strong>Project Phases:</strong></li>
                <ul>
                    <li style={{lineHeight:'2.4rem', paddingLeft:'20px'}}>• <strong>Initiation:</strong> Define goals and features</li>
                    <li style={{lineHeight:'2.4rem', paddingLeft:'20px'}}>• <strong>Planning:</strong> Sprint Planning Meeting</li>
                    <li style={{lineHeight:'2.4rem', paddingLeft:'20px'}}>• <strong>Execution:</strong> Sprints and Development</li>
                    <li style={{lineHeight:'2.4rem', paddingLeft:'20px'}}>• <strong>Monitor & Control:</strong> Backlog and Charts</li>
                    <li style={{lineHeight:'2.4rem', paddingLeft:'20px'}}>• <strong>Close:</strong> Deliver final features</li>
                </ul>
                <br />
                </ul>
                <p>The goal is to create a scalable, secure infrastructure that ensures safe remote access through the VPN, with MFA, proactive ransomware detection, and strict credential management to protect sensitive information.</p>
            </div>
            <img style={{boxShadow:'none'}} src='https://www.intellectsoft.net/blog/wp-content/uploads/Scrum_Principles.png' alt=''></img>
            </div>
        </div>
    )
}

export default Scrum