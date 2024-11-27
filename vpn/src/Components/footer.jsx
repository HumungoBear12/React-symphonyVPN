import React from 'react';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-section">
        <h2>Symphony VPN</h2>
        <p>Your secure, scalable VPN solution</p>
        <p>Symphony VPN Website</p>
        <p>@Symphony 2024</p>
      </div>
      <div className="footer-section">
        <h3>Customer Support</h3>
        <p>Email: support@symphonyvpn.com</p>
        <p>Phone: (123) 456-7890</p>
        <p>Hours: Mon-Fri, 9 AM - 5 PM</p>
      </div>
      <div className="footer-section">
        <h3>Request a Quote</h3>
        <p>Interested in Symphony VPN for your business?</p>
        <button className="quote-button">Request a Quote</button>
      </div>
    </div>
  );
};

export default Footer;
