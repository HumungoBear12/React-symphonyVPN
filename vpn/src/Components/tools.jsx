import React from 'react'

const tools = () => {
  return (
    <div className='Tools'>
        <div>
            <h3 style={{fontFamily:'Future'}}>Configuring VPN</h3>
            <p>We used Python to build a secure, scalable VPN solution, implementing encryption protocols and tunneling mechanisms to ensure safe communication across networks.</p>
            <br />
        </div>
       
        <div>
            <h3 style={{fontFamily:'Future'}}>Multi-Factor Authentication</h3>
            <p>Multi-factor authentication (MFA) is integrated using Python libraries like pyotp, requiring users to authenticate via a combination of passwords and time-based one-time passcodes for enhanced security.</p>
        </div>

        <div>
            <h3 style={{fontFamily:'Future'}}>Admin Credentials</h3>
            <p>Admin credentials can be securely managed by enforcing strong password policies and limiting access through role-based access control (RBAC), ensuring only authorized personnel can make configuration changes.</p>
        </div>

        <div>
            <h3 style={{fontFamily:'Future'}}>Ransomware Detection</h3>
            <p>Ransomware detection can be implemented by integrating behavioral analysis tools and file integrity monitoring, using machine learning algorithms to detect unusual activity that may indicate a ransomware attack.</p>
        </div>
    </div>

  )
}

export default tools