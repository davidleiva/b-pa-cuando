import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <section className="container">
      <div className="row">

        <div className="col-md-7">

          <h4 className="display-6">Por una Bellavista digna</h4>
          <h2 className="display-3">Únete al movimiento "pa'cuando"</h2>

          <ol>

            <li>
              <h5>Cuéntaselo a tus amigos y vecinos</h5>
              <p>Necesitamos que se implique el mayor número de vecinos posible.Tú puedes ayudarnos, simplemente coméntaselo a amigos y conocidos.</p>
            </li>

            <li>
              <h5>¡Síguenos en redes sociales y únete a nuestras acciones!</h5>
              <p>Puedes seguirnos en instagram, facebook y twitter. Allí podras seguir nuestras acciones y unirte a ellas para hacer más ruido y lograr una Bellavista digna.</p>
            </li>

            <li>
              <h5>Usa el “hashtag” #BellavistaPaCuando” en redes sociales</h5>
              <p>Comparte en redes sociales tus quejas sobre el estado del barrio. Si además, usas el hashtag #BellavistaPaCuando y etiquetas al ayuntamiento o a los responsables del gobierno, mejor.</p>
            </li>



          </ol>
        </div>

        <div className="col-md-5">
          <div class="card">
            <div class="card-header">
            ¡Sé uno más del movimiento!
            </div>
            <div class="card-body">
              <h5 class="card-title">!Compra la camiseta y haz que se sepa</h5>
              <p class="card-text">
              <StaticImage
                src="../images/camiseta.png"
                width={300}
                quality={95}
                formats={["AUTO", "WEBP"]}
                alt="A Gatsby astronaut"
                className="img-fluid"
              />
              </p>
              <h6 className="h3">¡Sólo 9€!</h6>
              <p>Cobramos sólo gastos de producción</p>
              <a href="#" class="btn btn-primary">Quiero comprar la camiseta</a>
            </div>
          </div>
        </div>

      </div>

    </section>
  </Layout>
)

export default IndexPage
