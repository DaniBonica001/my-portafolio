import "./styles.css";
import { UilDownloadAlt } from '@iconscout/react-unicons'

function About() {
    return <section className="about section" id="about">
        <h2 className="section__title">About Me</h2>
        <span className="section__subtitle">My introduction</span>
        <div className="about__container container grid">
            <img src="src/assets/about.jpg" alt="About image" className="about__img" />
            <div className="about__data">
                <p className="about__description">I am constantly seeking to expand my knowledge and skills in the field of software engineering. I believe that staying up-to-date with the latest trends and technologies is essential to delivering high-quality products that meet the needs of users. I fully trust in my ability to learn and my ability to face the problems.</p>

                <div className="about__info">
                    <div>
                        <span className="about__info-title">08+</span>
                        <span className="about__info-name">Years <br />
                        experience </span>
                    </div>
                    <div>
                        <span className="about__info-title">20+</span>
                        <span className="about__info-name">Completed <br/> projects</span>
                    </div>
                    <div>
                        <span className="about__info-title">05+</span>
                        <span className="about__info-name">Companies <br/> worked </span>
                    </div>
                </div>
                <div className="about__buttons">
                    <a download="" href="src/assets/pdf/CV-Daniela_Bonilla_Caceres.pdf" className="button button--flex">
                        Download CV<UilDownloadAlt className="button__icon"/>
                    </a>
                </div>
            </div>
        </div>
    </section>;
}

export default About;