function Footer() {
  return (
   <footer className="footer">
      {/* Doormat Navigation */}
      <div className="doormat">
        <h3>Doormat Navigation</h3>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/menu">Menu</a></li>
          <li><a href="/reservations">Reservations</a></li>
          <li><a href="/order">Order Online</a></li>
          <li><a href="/login">Login</a></li>
        </ul>
      </div>

      {/* Contact Box */}
      <div className="contact">
        <h3>Contact</h3>
        <p>Email: info@littlelemon.com</p>
        <p>Phone: (555) 555-5555</p>
      </div>

      {/* Social Media Links */}
      <div className="social">
        <h3>Connect with us!</h3>
        <button>Facebook</button>
        <button>Instagram</button>
        <button>Twitter</button>
        {/* Later you can replace buttons with <a href=""> links */}
      </div>
    </footer>
  );
}

export default Footer;