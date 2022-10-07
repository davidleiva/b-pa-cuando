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
    <nav class="py-4 text-primary ">
      <div class="container">
        <div className="row">
          <div className="col-lg-7">
            <a class="navbar-brand logo-container">
              <StaticImage
                src="../images/bellavista-pa-cuando.svg"
                width={172}
                quality={100}
                formats={["AUTO", "WEBP"]}
                alt="A Gatsby astronaut"
                className="img-fluid"
              />
            </a>
          </div>

          <div class="col-lg-5">
          <div className="d-flex align-items-center bg-primary text-white p-2 rounded social-container">
            <span>Síguenos en redes sociales</span>
            <ul class="list-group list-group-horizontal list-group-flush ">
              <li class="list-group-item bg-transparent" style={{ border: 'none' }}>
                <a target="_blank" href="https://www.instagram.com/bellavistapacuando/">
                  <StaticImage
                    src="../images/instagram.png"
                    width={48}
                    quality={100}
                    formats={["AUTO", "WEBP"]}
                    alt="Instagram Bellavista pa'cuando"
                    className="img-fluid"
                  />
                </a>
              </li>
              <li class="list-group-item bg-transparent" style={{ border: 'none' }}>
                <a target="_blank" href="https://www.facebook.com/profile.php?id=100086093963788">
                  <StaticImage
                    src="../images/facebook.png"
                    width={48}
                    quality={100}
                    formats={["AUTO", "WEBP"]}
                    alt="Facebook Bellavista pa'cuando"
                    className="img-fluid"
                  />
                </a>
              </li>
              <li class="list-group-item bg-transparent" style={{ border: 'none' }}>
                <a target="_blank" href="https://twitter.com/Bellav_PaCuando">
                  <StaticImage
                    src="../images/twitter.png"
                    width={48}
                    quality={100}
                    formats={["AUTO", "WEBP"]}
                    alt="Twitter Bellavista pa'cuando"
                    className="img-fluid"
                  />
                </a>
              </li>
            </ul>
          </div>
          </div>
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
