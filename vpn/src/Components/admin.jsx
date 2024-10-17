import React from 'react'

const Admin = () => {
    return (
        <div className='container-admin'>
            <div>
                <h5>Security Controls</h5>
                <hr />
                <p> 
                    <strong>Strong Password Policies</strong>: Implement complex password requirements (e.g., length, special characters) and enforce regular password changes to enhance security.
                    <br /><br />
                    <strong>Multi-Factor Authentication (MFA)</strong>: Require MFA for admin accounts to provide an additional layer of security beyond just passwords, reducing the risk of unauthorized access.
                    <br /><br />
                    <strong>Least Privilege Principle</strong>: Limit admin privileges to only the necessary functions. Ensure admins only have access to resources and tools essential for their tasks to minimize potential damage from compromised credentials.
                </p>
            </div>

            <div>
                <h5>Monitoring and Auditing</h5>
                <hr />
                <p> 
                    <strong>Activity Logging</strong>: Ensure detailed logging of all admin actions, including login attempts, configuration changes, and access to sensitive systems. This helps track suspicious or unauthorized activities.
                    <br /><br />
                    <strong>Regular Audits</strong>: Conduct regular security audits on admin accounts to review access controls, password policies, and any anomalous activities.
                    <br /><br />
                    <strong>Alerts for Suspicious Behavior</strong>: Set up real-time alerts for unusual or unauthorized actions performed with admin credentials, such as accessing sensitive files or systems during off-hours.
                </p>
            </div>

            <div>
                <h5>Credential Management and Maintenance</h5>
                <hr />
                <p> 
                    <strong>Secure Storage</strong>: Store admin credentials securely, using tools like password managers or secure vaults (e.g., HashiCorp Vault), to prevent exposure or unauthorized access.
                    <br /><br />
                    <strong>Credential Rotation</strong>: Regularly rotate admin credentials, especially after employee departures or suspected security incidents, to reduce the risk of exploitation from old credentials.
                    <br /><br />
                    <strong>Access Revocation</strong>: Implement processes to immediately revoke admin credentials for former employees or compromised accounts to prevent continued unauthorized access.
                </p>
            </div>
        </div>
    )
}

export default Admin