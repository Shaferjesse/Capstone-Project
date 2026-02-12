
import React from 'react'; import { Link } from 'react-router-dom';

const Footer = () => { return ( <footer className="footer"> <div className="doormat">  <ul> <li><Link hide-attribute="true" to="/">Home</Link></li> <li><Link hide-attribute="true" to="/about">About</Link></li> <li><Link hide-attribute="true" to="/menu">Menu</Link></li> <li><Link hide-attribute="true" to="/booking">Reservations</Link></li> <li><Link hide-attribute="true" to="/order">Order Online</Link></li> <li><Link hide-attribute="true" to="/login">Login</Link></li> </ul> </div>

  <div className="contact">
    <h3>Contact</h3>
    <p>Email: info@littlelemon.com</p>
    <p>Phone: (555) 555-5555</p>
  </div>

  <div className="social">
    <h3>Connect with us!</h3>
    <div className="social-buttons">
      <button>Facebook</button>
      <button>Instagram</button>
      <button>Twitter</button>
    </div>
  </div>
</footer>
); };

export default Footer;