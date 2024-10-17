import React from "react";
import Logo from '../Images/Icon.webp'

const Overview = () =>{
    return (
        <div className="containerOverview">
            <h3 id="overview">Overview</h3>
            <hr/>
            <div className="flex4">
                <div style={{ padding: '15px', width:'50%' }}>
                    <p>
                    The <strong>Symphony VPN</strong> project is a senior IT initiative at Grand Canyon University (GCU), led by Arkelly, Andrew, and Cameron. Its goal is to design a secure Virtual Private Network (VPN) solution focused on cybersecurity resilience.
                    </p>
                    <h4>Team Members</h4>
                    <p style={{ lineHeight: '2.5rem', paddingLeft:'20px' }}>
                    • Arkelly<br/> • Andrew <br/>• Cameron
                    </p>

                    <h4>Key Features</h4>
                    <ul style={{ paddingLeft: '20px', lineHeight: '2.5rem' }}>
                        <li>• Multi-factor authentication (MFA)</li>
                        <li>• Ransomware detection</li>
                        <li>• Robust credential management</li>
                    </ul>
                    <br/>
                    <h4>Methodology</h4>
                    <p style={{ lineHeight: '2.5rem', paddingLeft:'20px' }}>• Scrum</p>
                    <h4>Vision Statement</h4>
                    <p>
                    "To create a robust infrastructure that ensures secure remote access via a VPN, utilizing MFA, proactively detecting ransomware, and enforcing strict management of admin credentials to protect sensitive information."
                    </p>

                    <h4>Purpose</h4>
                    <p>
                    Our goal is to configure a secure VPN that integrates MFA, uses admin credentials for access control, and includes ransomware detection.
                    </p>

                    <p>
                    The project follows the Scrum methodology, emphasizing iterative development and collaboration. This approach allows the team to break the project into manageable sprints for frequent updates based on testing and feedback.
                    </p>

                    <p>
                    By combining advanced security features with an agile framework, Symphony VPN aims to provide a scalable and efficient solution that enhances cybersecurity while ensuring user accessibility.
                    </p>
                </div>
                <div>
                    {/* <h3 style={{textAlign:"center"}}>Company Logo</h3> */}
                    <img src={Logo} alt=''></img>
                    <br />
                    <br />
                    <br />
                    <div className="flex4">
                        <div style={{ width: "50%", paddingLeft: '15px' }}>
                            <h5>Ideas for VPN</h5>
                            <ul style={{ paddingLeft: '20px', lineHeight: '2.5rem' }}>
                            <li>• Build and configure a VPN</li>
                            <li>• Implement Multi-Factor Authentication</li>
                            <li>• Detect and mitigate ransomware</li>
                            <li>• Secure admin credentials</li>
                            </ul>
                            <br />
                            <h5>Long Range Results</h5>
                            <ul style={{ paddingLeft: '20px', lineHeight: '2.5rem' }}>
                                <li>• Enhance Security Posture</li>
                                <li>• Improve Threat Detection</li>
                                <li>• Reduce Security Incidents</li>
                            </ul>
                        </div>
                        <br />
                        <div style={{ width: "50%", paddingLeft: '15px' }}>
                        <h5>Attributes</h5>
                            <ul style={{ paddingLeft: '20px', lineHeight: '2.5rem' }}>
                                <li>• Security</li>
                                <li>• User Authentication</li>
                                <li>• Threat Mitigation</li>                                
                                <li>• Secure Access</li>
                            </ul>
                            <br />
                            <h5>Constraints</h5>
                            <ul style={{ paddingLeft: '20px', lineHeight: '2.5rem' }}>
                                <li>• Budget Limitations</li>
                                <li>• Technical Compatibility</li>
                                <li>• Resource Availability</li>
                            </ul>  
                        </div>
                        </div>

                </div>
            </div>
        </div>
    )
}
export default Overview