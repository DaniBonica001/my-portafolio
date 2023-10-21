import "./styles.css";
import { UilLinkedinAlt } from "@iconscout/react-unicons";
import { UilGithubAlt } from "@iconscout/react-unicons";
import { UilInstagram } from "@iconscout/react-unicons";
import { UilMessage } from "@iconscout/react-unicons";
import { UilMouseAlt } from "@iconscout/react-unicons";
import { UilArrowDown } from "@iconscout/react-unicons";
import profile from "../assets/perfil.png"

function Home() {
  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
        <div className="home__content grid">
          <div className="home__social">
            <a
              href="https://www.linkedin.com/in/daniela-bonilla-872208254/"
              target="_blank"
              className="home__social-icon"
            >
              <UilLinkedinAlt />
            </a>
            <a
              href="https://github.com/DaniBonica001"
              target="_blank"
              className="home__social-icon"
            >
              <UilGithubAlt />
            </a>
            <a
              href="https://www.instagram.com/dani.bc0106/"
              target="_blank"
              className="home__social-icon"
            >
              <UilInstagram />
            </a>
          </div>
          <div className="home__img">
            <svg
              className="home__blob"
              viewBox="0 0 200 187"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <image
                className="home__blob-img"
                x="12"
                y="18"
                href={profile}
              />
            </svg>
          </div>
          <div className="home__data">
            <h1 className="home__title">Hi, I'm Daniela</h1>
            <h3 className="home__subtitle">Software Engineer</h3>
            <p className="home__description">
            As a passionate full-stack developer, my focus is on crafting systems that meet the highest quality standards. My enthusiasm drives me to tackle challenges and maintain continuous learning to stay current with the latest technological trends. My commitment is to ongoing growth as a developer, contributing to the creation of reliable and adaptable applications.
            </p>
            <a href="#contact" className="button button--flex">
              Contact Me <UilMessage className="button__icon" />
            </a>
          </div>
        </div>
        <div className="home__scroll">
          <a href="#about" className="home__scroll-button button--flex">
            <UilMouseAlt className="home__scroll-mouse" />
            <span className="home__scroll-name">Scroll down </span>
            <UilArrowDown className="home__scroll-arrow" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Home;
