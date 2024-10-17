import React from 'react'

const VPN = () =>{
    return (
        <div >
            <div className='container-vpn'>
                <div style={{ width: "50%" }}>
                    <div>
                    <h5>Ideas for VPN</h5>
                    <ul>
                        <li>- Build and configure a VPN</li>
                        <li>- Implement Multi-Factor Authentication (MFA)</li>
                        <li>- Detect and mitigate ransomware</li>
                        <li>- Secure admin credentials</li>
                    </ul>
                    </div>
                    <h5>Vision Statement</h5>
                    <p>
                    "To create a robust infrastructure that ensures secure remote access via a VPN, utilizing MFA, proactively detecting ransomware, and enforcing strict management of admin credentials to protect sensitive information."
                    </p>
                    <div>
                    <h5>Purpose</h5>
                    <p>
                        Our goal is to configure a secure VPN that integrates MFA, uses admin credentials for access control, and includes ransomware detection.
                    </p>
                    </div>
                </div>
                
                <div style={{ width: "50%" }}>
                    <h5>Constraints</h5>
                    <ul>
                    <li>- Budget Limitations</li>
                    <li>- Technical Compatibility</li>
                    <li>- Resource Availability</li>
                    </ul>

                    <h5>Attributes</h5>
                    <ul>
                    <li>- Security</li>
                    <li>- User Authentication</li>
                    <li>- Threat Mitigation</li>
                    </ul>

                    <h5>Long Range Results</h5>
                    <ul>
                    <li>- Enhance Security Posture</li>
                    <li>- Improve Threat Detection</li>
                    <li>- Reduce Security Incidents</li>
                    </ul>
                </div>
                </div>

                <h5 className='dawg'>Steps for VPN Configuration</h5>
                <div className='container-mfa'>
                <div>
                    <h5>1. Assess Requirements and Define Policies</h5>
                    <p>
                    <strong>Identify Security Needs</strong>: Evaluate specific security requirements, including compliance and policies for MFA and ransomware.
                    <br />
                    <br />
                    <strong>Create Policies</strong>: Establish policies for MFA, admin credential management, and ransomware response.
                    </p>
                </div>

                <div>
                    <h5>2. Implement Multi-Factor Authentication (MFA)</h5>
                    <p>
                    <strong>Select an MFA Solution</strong>: Choose an MFA provider (e.g., Duo, Okta) that supports multiple verification methods.
                    <br />
                    <br />
                    <strong>Configure MFA Settings</strong>: Require multiple verification methods during VPN login and test with a pilot group.
                    </p>
                </div>

                <div>
                    <h5>3. Integrate Ransomware Detection Mechanisms</h5>
                    <p>
                    <strong>Choose Ransomware Detection Tools</strong>: Implement tools for real-time ransomware detection that monitor VPN traffic.
                    <br />
                    <br />
                    <strong>Configure Alerts and Response Plans</strong>: Set alerts for suspicious activity and develop incident response protocols.
                    </p>
                </div>

                <div>
                    <h5>4. Establish Secure Admin Credential Management</h5>
                    <p>
                    <strong>Implement Strong Credential Policies</strong>: Enforce strong passwords and regular credential rotation.
                    <br />
                    <br />
                    <strong>Enable MFA for Admin Accounts</strong>: Require MFA for all admin accounts to enhance security.
                    </p>
                </div>

                <div>
                    <h5>5. Conduct Testing and Ongoing Monitoring</h5>
                    <p>
                    <strong>Test the Configuration</strong>: Perform testing of the VPN, MFA, and ransomware setups, including penetration testing.
                    <br />
                    <br />
                    <strong>Monitor and Review Regularly</strong>: Continuously monitor logs and alerts, and review security policies regularly.
                    </p>
                </div>
                </div>


        </div>
    )
}

export default VPN