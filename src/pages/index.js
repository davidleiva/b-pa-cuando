import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"

const IndexPage = () => (
  <Layout>
    <Seo title="Bellavista pa' cuando" />
    <section className="container text-primary">
      <div className="row">

        <div className="col-md-7">

          <h4 className="display-6 ftext" style={{ letterSpacing: '-0.5px' }}>Por una <span className="text-secondary">Bellavista digna</span></h4>
          <h2 className="display-4 mb-5 d-md-none">¡Únete al movimiento "#BellavistaPaCuando"!</h2>
          <h2 className="display-5 mb-5 d-none d-md-block d-xl-none" style={{ fontSize: '40px' }}>¡Únete al movimiento "#BellavistaPaCuando"!</h2>
          <h2 className="display-3 mb-5 d-none d-xl-block">¡Únete al movimiento "#BellavistaPaCuando"!</h2>

          <div className="video-container mb-4 ratio ratio-16x9"><iframe width="560" height="315" src="https://www.youtube.com/embed/44tPa3O4pUA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>

          <ol className="custom">

            <li className="mb-4">
              <h5>Cuéntaselo a tus amigos y vecinos</h5>
              <p>Necesitamos que se implique el mayor número de vecinos posible.Tú puedes ayudarnos, simplemente coméntaselo a amigos y conocidos.</p>
            </li>

            <li className="mb-4">
              <h5>¡Síguenos en redes sociales y únete a nuestras acciones!</h5>
              <p>Puedes seguirnos en <a href="https://www.instagram.com/bellavistapacuando/" target="_blank">instagram</a>, <a href="https://www.facebook.com/profile.php?id=100086093963788" target="_blank">facebook</a> y <a href="https://twitter.com/Bellav_PaCuando" target="_blank">twitter</a>. Allí podras seguir nuestras acciones y unirte a ellas para hacer más ruido y lograr una Bellavista digna.</p>
            </li>

            <li className="mb-4">
              <h5>Usa el “hashtag” #BellavistaPaCuando” en redes sociales</h5>
              <p>Comparte en redes sociales tus quejas sobre el estado del barrio. Si además, usas el hashtag #BellavistaPaCuando y etiquetas al ayuntamiento o a los responsables del gobierno, mejor.</p>
            </li>



          </ol>
        </div>

        <div className="col-md-5">
          <div className="card bg-secondary text-white">
            <div className="card-body">
              <h6 className="ftext text-primary">¡Sé uno más del movimiento!</h6>
              <h5 className="card-title h2 mb-4">¡Compra la camiseta y corre la voz!</h5>
              <div className="card-text mb-4">
                <StaticImage
                  src="../images/camiseta.png"
                  width={300}
                  quality={95}
                  formats={["AUTO", "WEBP"]}
                  alt="A Gatsby astronaut"
                  className="img-fluid"
                />
              </div>
              <div className="d-flex">
                <h6 className="h3 fsemi pe-2 w-50" style={{ fontSize: '2.5rem' }}>¡Sólo 9€!</h6>
                <p className="w-50">Cobramos sólo <br />gastos de producción</p>
              </div>

              {/* <!-- Button trigger modal --> */}
              <button type="button" className="btn btn-primary btn-lg w-100" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Quiero comprar la camiseta
              </button>
            </div>

          </div>
        </div>
        <p className="text-center my-3">Bellavista Pa Cuando · Todos los derechos reservados</p>
      </div>

    </section>
    {/* <!-- Modal --> */}
    <div className="modal fade text-primary" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">Cómo conseguir la camiseta</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <p>Puedes encargarla de cualquiera de siguientes maneras:</p>
            <ul>
              <li className="mb-3">Llamando al <a href="tel:675188647" target="_blank">675 18 86 47</a></li>
              <li className="mb-3">Pidiéndola en el <a href="https://goo.gl/maps/dMtbsffpeEpbLjH56" target="_blank">Bar Libra</a> (C/ Provença 29, Bellavista)</li>
              <li className="mb-3">Enviando un email a <a href="mailto:bellavistapacuando@gmail.com" target="_blank">bellavistapacuando@gmail.com</a></li>
            </ul>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Cerrar</button>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
