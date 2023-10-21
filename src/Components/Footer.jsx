import "./styles.css";
import { UilInstagram } from "@iconscout/react-unicons";
import { UilLinkedinAlt } from "@iconscout/react-unicons";
import { UilGithubAlt } from "@iconscout/react-unicons";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__bg">
        <div className="footer__container container grid">
          <div>
            <h1 className="footer__title">Daniela</h1>
            <span className="footer__subtitle">Software Engineer</span>
          </div>

          <ul className="footer__links">
            <li>
              <a href="#services" className="footer__link">
                Services
              </a>
            </li>
            <li>
              <a href="#portafolio" className="footer__link">
                Portafolio
              </a>
            </li>
            <li>
              <a href="#contact" className="footer__link">
                Contact Me
              </a>
            </li>
          </ul>

          <div className="footer__socials">
            <a
              href="https://www.instagram.com/dani.bc0106/"
              target="_blank"
              className="footer__social"
            >
              <UilInstagram className="button__icon"/>
            </a>

            <a
              href="https://www.linkedin.com/in/daniela-bonilla-872208254/"
              target="_blank"
              className="footer__social"
            >
              <UilLinkedinAlt className="button__icon" />
            </a>

            <a
              href="https://github.com/DaniBonica001"
              target="_blank"
              className="footer__social"
            >
              <UilGithubAlt className="button__icon" />
            </a>
          </div>          
        </div>
        <p className="footer__copy">&#169; Daniela. All right reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
