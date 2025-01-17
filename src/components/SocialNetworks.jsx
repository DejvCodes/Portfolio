import "./SocialNetworks.css"
import { socials } from "../data/data"
import { Link } from "react-router-dom"

const SoocialNetwork = () => {
  return <div className="social-networks">
    {socials.map((oneLink, index) => {
      const { link, icon } = oneLink
      return <Link key={index} to={link} target="_blank" className="link">{icon}</Link>
    })}
  </div>
}

export default SoocialNetwork