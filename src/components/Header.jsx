import "./Header.css"
import { nav } from "../data/data"
import { useState, useEffect } from "react"
import { HashLink as Link } from 'react-router-hash-link'

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  // Open menu
  const handleOpenMenu = () => {
    setOpenMenu(!openMenu)
  }

  // Function for active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section")
      let currentSection = ""

      sections.forEach((oneSection) => {
        const sectionTop = oneSection.offsetTop
        const sectionHeight = oneSection.offsetHeight
        if (window.scrollY >= sectionTop - 50 && window.scrollY < sectionTop + sectionHeight - 50) {
          currentSection = oneSection.getAttribute("id")
          // console.log(currentSection)
        }
      })
      setActiveSection(currentSection)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return <>
    <header className="header" id="header">
      <div className="container">
        <div className="logo-dejvcodes">
          <Link smooth to="#">
            Dejv<span className="span-name">Codes</span>
            <span className="span-dot">.</span>
          </Link>
        </div>

        <nav className="navigation">
          <ul className={openMenu ? "nav-links show" : "nav-links"}>
            {nav.map((oneLink) => {
              const { id, path, text } = oneLink
              return <li
                key={id}
                className={openMenu ? "one-link fade" : "one-link"}
                style={{ "--i": id }}
                onClick={() => handleOpenMenu()}
              >
                <Link smooth to={path} className={`${activeSection === path.replace("#", "") ? "active" : ""}`}>{text}</Link>
              </li>
            })}
          </ul>
        </nav>

        <div className="burger-menu" onClick={handleOpenMenu}>
          <div className={openMenu ? "line1" : ""}></div>
          <div className={openMenu ? "line2" : ""}></div>
          <div className={openMenu ? "line3" : ""}></div>
        </div>
      </div>
    </header>
  </>
}

export default Header