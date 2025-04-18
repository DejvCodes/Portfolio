import "./AboutMeSection.css"
import aboutMeImg from "../../images/about-me-img.png"

const AboutMeSection = () => {
  return <section className="about-me" id="about-me">
    <div className="about-me-container container">
      <div className="about-me-data">
        <h2 className="about-me-subtitle">Hi, I'm <span className="about-me-name">Dejv</span></h2><br />
        <p className="about-me-second-subtitle">Front-end / JavaScript / TypeScript / React</p>
        <p className="about-me-description">I'm 22 years old and I'm from Pardubice region in the Czech Republic. 
          I'm a Front-End Developer at the start of my career and I really enjoy improving my coding skills, 
          developing applications and websites.
        </p>
        <p className="about-me-second-description">Fan of cars, motorbikes, travelling,
          great coffee and of course coding.
        </p>
        <p className="about-me-third-description">Most of the time you can find me coding or at the gym.</p>
        <p className="about-me-fourth-description">My favourite way to relax? Travelling.</p>
      </div>
      <div className="about-me-img">
        <img src={aboutMeImg} alt="DejvCodes - David Kalmus - About Me" />
      </div>
    </div>
  </section>
}

export default AboutMeSection