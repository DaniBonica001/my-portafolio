import "./styles.css";
import { UilDownloadAlt } from '@iconscout/react-unicons'

function About() {
    return <section className="about section" id="about">
        <h2 className="section__title">About Me</h2>
        <span className="section__subtitle">My introduction</span>
        <div className="about__container container grid">
            <img src="src/assets/code.jpg" alt="About image" className="about__img" />
            <div className="about__data">
                <p className="about__description">Hi there! I'm a full-stack developer with a deep passion for all things tech. With strong technical skills and a creative problem-solving mindset, I strive to build innovative solutions that make a meaningful impact.</p> 
                
                <p className="about__description">As a passionate and skilled full-stack developer, I've worked on diverse projects both independently and collaboratively in cross-functional teams. Thriving in fast-paced environments, I efficiently adapt to changing project requirements, leveraging my expertise in agile methodologies.</p>

                <div className="about__buttons">
                    <a download="" href="src/assets/pdf/CV_Daniela_Bonilla_Caceres.pdf" className="button button--flex">
                        Download CV<UilDownloadAlt className="button__icon"/>
                    </a>
                </div>
            </div>
        </div>
    </section>;
}

export default About;