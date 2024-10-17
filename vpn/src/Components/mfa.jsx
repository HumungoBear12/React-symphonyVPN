import React from 'react'
import mfa from '../Images/mfa.png'
const MFA = () => {
    return(
        <div className='container-mfa'>
            <div className='Flex'>
                <div>
                    <div className='div1'>
                        <h5>Security Requirements</h5>
                        <p> 
                            <strong>Risk Assessment</strong>: Evaluate the specific risks the VPN will protect against, such as unauthorized access or phishing. Understanding potential attack vectors helps in tailoring the MFA implementation.
                            <br />
                            <br />  
                            <strong>Regulatory Compliance</strong>: Identify any legal or industry-specific requirements for VPN security (e.g., HIPAA, GDPR), which may mandate the use of MFA.
                            <br />
                            <br />
                            <strong>Threat Modeling</strong>: Analyze potential threats to ensure the MFA solution adequately addresses common vulnerabilities, including man-in-the-middle (MitM) attacks or credential theft.
                        </p>
                    </div>

                    <div className='div1'>
                        <h5>Technical Considerations</h5>
                        <p> 
                            <strong>Integration with Existing Systems</strong>: Ensure that the MFA solution integrates with the existing VPN infrastructure and other security solutions (e.g., Azure AD, Okta) to maintain compatibility and performance.
                            <br />
                            <br />
                            <strong>User Authentication Methods</strong>: Decide which MFA methods are appropriate (e.g., SMS, app-based, hardware tokens) based on security needs and user experience.
                            <br />
                            <br />
                            <strong>Scalability and Performance</strong>: Consider how the MFA implementation will scale with the growing number of users, and ensure the VPN infrastructure can handle the additional authentication load without compromising performance.
                        </p>
                    </div>

                    <div className='div1'>
                        <h5>User Experience and Management</h5>
                        <p> 
                            <strong>Ease of Use</strong>: Select an MFA method that is easy for users to adopt without disrupting their workflow. This includes considering users' technical abilities and accessibility needs.
                            <br />
                            <br />
                            <strong>User Training and Support</strong>: Plan for user education on how to use MFA correctly and efficiently, as well as how to troubleshoot common issues (e.g., lost authentication tokens).
                            <br />
                            <br />
                            <strong>Administrative Management</strong>: Set up clear policies for managing MFA tokens, resetting credentials, and handling exceptions (e.g., temporary access without MFA in emergencies).
                        </p>
                    </div>
                </div>
                <div>
                    <h3>MFA Usage Diagram</h3>
                    <img style={{width:'100%'}} src={mfa} alt="" />
                </div>
            </div>
        </div>
    )
}

export default MFA