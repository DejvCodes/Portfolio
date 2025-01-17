import "./OneProjectCard.css"
import { Link } from "react-router-dom"
import { FaGithub } from "react-icons/fa6"

const OneProjectCard = ({ image, cardTitle, typeOfProject, link, githubLink }) => {
  return <article className="one-project-card">
    <img src={image} alt={cardTitle} />
    <div className="card-data">
      <div className="card-data-text">
        <h2 className="card-title">{cardTitle}</h2>
        <span className="type-of-project">• {typeOfProject}</span>
        <Link to={link} target="_blank" className="card-link">View Website</Link>
      </div>
      <div className={githubLink ? "card-data-githubLink" : "no-link"}>
        <Link to={githubLink} target="_blank" className="github"><FaGithub /></Link>
      </div>
    </div>
  </article>
}

export default OneProjectCard