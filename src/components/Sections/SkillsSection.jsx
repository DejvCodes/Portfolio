import "./SkillsSection.css"
import { Link } from "react-router-dom"
import { icons } from "../../data/data"

const SkillsSection = () => {
  return <section className="skills" id="skills">
    <div className="skills-container container">
      <div className="skills-data">
        <p className="skills-chance">A PROBLEM IS A CHANCE FOR YOU TO DO YOUR BEST</p>
        <h2 className="skills-title">Skills & Experience</h2>
        <p className="skills-description">
          My area of expertise is front-end development
          <span> (client side of the web)</span>.
        </p>
        <p className="skills-second-description">
          I primarily focus on <span>HTML</span>, <span>CSS</span>, <span>JavaScript</span> and 
          the modern library <span>React</span>. I consider React JS as my main working tool. I find 
          it very useful for front-end development. I'm currently learning more about <span>TypeScript</span>, 
          and in the future, I plan to learn <span>Tailwind</span>.
          {/* I primarily focus on <span>HTML</span>, <span>CSS</span>, <span>JavaScript</span> and
          modern library <span>React</span>. I consider React JS as my main working tool. I find
          it very useful for front-end development. I'm currently learning more about <span>TypeScript</span>.
          In the future I plan to learn <span>Tailwind</span>.  */}
          {/* I also have full-stack developer experience with
          one of the most popular open source CMS on the web - <span>WordPress</span>. */}
        </p>
        <p className="linked-in">
          Visit my <Link to="https://www.linkedin.com/in/david-kalmus-5b6b99299/" target="_blank">LinkedIn</Link> for more details.
        </p>
      </div>
      <div className="skills-icons">
        {icons.map((oneIcon, index) => {
          const { icon, language } = oneIcon
          return <div className="one-icon" key={index}>
            <i className={icon}></i>
            <h4>{language}</h4>
          </div>
        })}
      </div>
    </div>
  </section>
}

export default SkillsSection