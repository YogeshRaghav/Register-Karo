import React from 'react'
import '../Styles/Contact.css'
import Coinbase from '../Images/Coinbase.png'
import spotify from '../Images/spotify.png'
import Slack from '../Images/Slack.png'
import zm from '../Images/zm.png'
import wb from '../Images/wb.png'

const Contact = () => {
  return (
    <div>
      <div className="upper-contaniner">
      {/* Header Section */}
      <header className="header1">
        <h1>1% OF THE INDUSTRY</h1>
        <h2>Welcome to your new digital reality. Now.</h2>
        <div className="email-input">
          <input type="email" placeholder="Enter Your Email" />
          <button className= 'btn1'>Submit</button>
        </div>
        <div className="features1">
          <span>✅ Instant results</span>
          <span>✅ User-friendly interface</span>
          <span>✅ Personalized customization</span>
        </div>
      </header>

      {/* Logos Section */}
      <section className="logos1">
        <img src={Coinbase} alt="Coinbase" />
        <img src={spotify} alt="Spotify" />
        <img src={Slack} alt="Slack" />
        <img src={wb} alt="Webflow" />
        <img src={zm} alt="Zoom" />
      </section>

      {/* Footer Section */}
      <footer className="foote1r">
        <div className="footer-columns">
          <div>
            <h3>START A BUSINESS</h3>
            <ul>
              <li>Features</li>
              <li>Solutions</li>
              <li>Integrations</li>
              <li>Enterprise</li>
            </ul>
          </div>
          <div>
            <h3>GOVERNMENT REGISTRATION</h3>
            <ul>
              <li>Partners</li>
              <li>Community</li>
              <li>Developers</li>
              <li>App</li>
              <li>Blog</li>
            </ul>
          </div>
          <div>
            <h3>COMPLIANCE & TAX</h3>
            <ul>
              <li>Channels</li>
              <li>Scale</li>
              <li>Watch the Demo</li>
              <li>Our Competition</li>
            </ul>
          </div>
          <div>
            <h3>BIS & CDSCO</h3>
            <ul>
              <li>About Us</li>
              <li>News</li>
              <li>Leadership</li>
              <li>Media Kit</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom1">
          <p>&copy; 2024 RegisterKaro. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
    </div>
  )
}

export default Contact
