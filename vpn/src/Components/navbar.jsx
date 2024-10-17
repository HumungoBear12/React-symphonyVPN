import {React, useEffect} from 'react'
import feather from 'feather-icons';

const Navbar = () => {
    useEffect(() => {
        // Replace all feather icons after the component mounts
        feather.replace();
      }, []);
    return (
    <div>
        <nav class="navbar">
        <ul class="navbar__menu">
            <li class="navbar__item">
            <a href="#" class="navbar__link"><i style={{color:'white'}} data-feather="home"></i><span>Home</span></a>
            </li>
            <li class="navbar__item">
            <a href="#overview" class="navbar__link"><i style={{color:'white'}} data-feather="book"></i><span>Overview</span></a>        
            </li>
            <li class="navbar__item">
            <a href="#team" class="navbar__link"><i style={{color:'white'}} data-feather="users"></i><span>Team</span></a>        
            </li>
            <li class="navbar__item">
            <a href="#methodolgy" class="navbar__link"><i style={{color:'white'}} data-feather="clipboard"></i><span>Methodolgy</span></a>        
            </li>
            <li class="navbar__item">
            <a href="#scope" class="navbar__link"><i style={{color:'white'}} data-feather="calendar"></i><span>Scope and Schedule</span></a>        
            </li>
            <li class="navbar__item">
            <a href="#vpn" class="navbar__link"><i style={{color:'white'}} data-feather="server"></i><span>VPN Configuration</span></a>        
            </li>
            <li class="navbar__item">
            <a href="#ransom" class="navbar__link"><i style={{color:'white'}} data-feather="shield"></i><span>Ransomware Detection</span></a>        
            </li>
            <li class="navbar__item">
            <a href="#mfa" class="navbar__link"><i style={{color:'white'}} data-feather="smartphone"></i><span>MFA Implementation</span></a>        
            </li>
            <li class="navbar__item">
            <a href="#admin" class="navbar__link"><i style={{color:'white'}} data-feather="user-check"></i><span>Admin Credential</span></a>        
            </li>
            
        </ul>
        </nav>
    </div>
  )
}

export default Navbar