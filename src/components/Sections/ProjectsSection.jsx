import "./ProjectsSection.css"
import { allProjects } from "../../data/data"
import OneProjectCard from "../OneProjectCard"

const ProjectsSection = () => {
  return <section className="projects" id="projects">
    <div className="projects-container container">
      <h2 className="projects-title">My projects</h2>
      <div className="all-projects">
        {allProjects.map((oneProject) => {
          return <OneProjectCard key={oneProject.id} {...oneProject} />
        })}
      </div>
    </div>
  </section>
}

export default ProjectsSection