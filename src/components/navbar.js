import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const isActive = ({ isCurrent }) => {
  return isCurrent ? { className: "nav-link active" } : { className: "nav-link" }
}

const ExactNavLink = props => (
  <Link getProps={isActive} {...props} />
)

const Navbar = ({ siteTitle }) => {
  return (
    <nav class="navbar py-4">
      <div class="container">
        <a class="navbar-brand">
          <StaticImage
            src="../images/bellavista-pa-cuando.svg"
            width={172}
            quality={100}
            formats={["AUTO", "WEBP"]}
            alt="A Gatsby astronaut"
            className="img-fluid"
          />
        </a>
        <div class="d-flex align-items-center">
          <span>Síguenos en redes sociales</span>
          <ul class="list-group list-group-horizontal list-group-flush ">
            <li class="list-group-item" style={{border: 'none' }}>
              <a href="#">
                <StaticImage
                  src="../images/instagram.png"
                  width={48}
                  quality={100}
                  formats={["AUTO", "WEBP"]}
                  alt="A Gatsby astronaut"
                  className="img-fluid"
                />
              </a>
            </li>
            <li class="list-group-item" style={{border: 'none' }}>
              <a href="#">
                <StaticImage
                  src="../images/facebook.png"
                  width={48}
                  quality={100}
                  formats={["AUTO", "WEBP"]}
                  alt="A Gatsby astronaut"
                  className="img-fluid"
                />
              </a>
            </li>
            <li class="list-group-item" style={{border: 'none' }}>
              <a href="#">
                <StaticImage
                  src="../images/twitter.png"
                  width={48}
                  quality={100}
                  formats={["AUTO", "WEBP"]}
                  alt="A Gatsby astronaut"
                  className="img-fluid"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

Navbar.propTypes = {
  siteTitle: PropTypes.string,
}

Navbar.defaultProps = {
  siteTitle: ``,
}

export default Navbar
