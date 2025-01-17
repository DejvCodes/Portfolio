import "./HomeSection.css"
import homeSVG from "../../images/home.svg"
import { HashLink } from "react-router-hash-link"

const HomeSection = () => {
  return <section className="home" id="home">
    <div className="home-container container">
      <div className="home-data">
        <h2 className="my-name">David Kalmus</h2>
        <h1 className="home-title">
          Front-end&nbsp;Software<br />
          Developer
        </h1>
        <p className="home-description">Solving problems, creating smart user interfaces
          and useful interactions, developing rich web applications and seamless web experiences.
        </p>
        <div className="home-buttons">
          <HashLink smooth to="#projects" className="home-button first-btn">Projects</HashLink>
          <HashLink smooth to="#skills" className="home-button second-btn">My skills</HashLink>
        </div>
      </div>
      <div className="home-img">
        <img src={homeSVG} alt="DejvCodes - David Kalmus" />
      </div>
    </div>
  </section>
}

export default HomeSection  