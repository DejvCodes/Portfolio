import "./ContactSection.css"
import { contacts } from "../../data/data"
import { Link } from "react-router-dom"
import contactImg from "../../images/contact-img.png"

const ContactSection = () => {
  return <section className="contact" id="contact">
    <div className="contact-container container">
      <h2 className="contact-title">Contact</h2>
      <div className="contact-data">
        <div className="contact-data-cards">
          {contacts.map((oneContact, index) => {
            const { icon, network, link, text } = oneContact
            return <div key={index} className="contact-one-card">
              <h2>{icon} {network}</h2>
              <Link to={link} target="_blank">{text}</Link>
            </div>
          })}
        </div>

        <div className="contact-img">
          <img src={contactImg} alt="David Kalmus" />
        </div>
      </div>
    </div>
  </section>
}

export default ContactSection