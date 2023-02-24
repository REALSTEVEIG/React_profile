import Picture from "./assets/picture.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';


export default function App () {
    return (
        <div className="image_container">
            <img src={Picture} alt="No picture to display" className='header--photo'/>
            <h1 className="business_name">Ignatius Stephen</h1>
            <p className="profession">Fullstack Developer</p>
            <p className="business_website"><a href="https://myportfolio-gz6j.onrender.com/">stephen.website</a></p>
            <a href="mailto:stephenignatiusbiz@gmail.com"><button className="email_button"><i class="fa fa-envelope" aria-hidden="true"></i> EMAIL</button></a>
            <h3 className="business_about">About</h3>
            <p className="business_about_content">I am a Fullstack developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
            <h3 className="business_interest">Interest</h3>
            <p className="business_interest_content">Computer Scientist. Philosopher. Chess player. Teacher. Mentor. Music lover (Afro pop). Reader. Internet fanatic. Entrepreneur. Travel geek.</p>
            <div className="social_media">
              <a href="https://twitter.com/REALSTEPHENIG"><FontAwesomeIcon icon={faTwitter} className="icon_twitter"/></a>
              <a href="https://web.facebook.com/stephen.ignatius.92"><FontAwesomeIcon icon={faFacebook} className="icon_facebook"/></a>
              <a href="https://www.instagram.com/ablesteve001/"><FontAwesomeIcon icon={faInstagram} className="icon_instagram"/></a>
              <a href="https://www.linkedin.com/in/stephen-ignatius-a5422022b/"><FontAwesomeIcon icon={faLinkedin} className="icon_linkedin"/></a>
              <a href="https://github.com/REALSTEVEIG"><FontAwesomeIcon icon={faGithub} className="icon_github"/></a>
            </div>
        </div>
    )
}