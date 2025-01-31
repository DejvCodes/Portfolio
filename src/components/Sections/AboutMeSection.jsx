import "./AboutMeSection.css"
import aboutMeImg from "../../images/about-me-img.png"

const AboutMeSection = () => {
  return <section className="about-me" id="about-me">
    <div className="about-me-container container">
      <div className="about-me-data">
        <h2 className="about-me-subtitle">Hi, I'm <span className="about-me-name">Dejv</span></h2><br />
        <p className="about-me-second-subtitle">Front-end / JavaScript / React / Wordpress</p>
        <p className="about-me-description">I'm 22 years old and I'm from Pardubice region in the Czech Republic. 
          I'm Front-End Developer at the beginning of my career and I really enjoy improving my coding skills, 
          developing applications and websites.
        </p>
        <p className="about-me-second-description">Fan of cars, motorbikes, traveling,
          good coffee and of course coding.
        </p>
        <p className="about-me-third-description">Most of the time I'm coding or I'm in the gym.</p>
        <p className="about-me-fourth-description">My best rest is traveling.</p>
      </div>
      <div className="about-me-img">
        <img src={aboutMeImg} alt="DejvCodes - David Kalmus - About Me" />
      </div>
    </div>
  </section>
}

export default AboutMeSection