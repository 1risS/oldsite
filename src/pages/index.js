import React from 'react'
import Helmet from 'react-helmet'
import './index.css'

import Layout from '../components/layout'

class HomeIndex extends React.Component {

    render() {
        const siteTitle = "irisS"
        const siteDescription = "Sound programmer"

        return (
            <Layout>
                <Helmet>
                        <title>{siteTitle}</title>
                        <meta name="description" content={siteDescription} />
                </Helmet>

                <div id="main">

                    <section id="one">
                        <header className="major">
                            <h2>Soy programadora de sonido y productora.</h2>
                        </header>
                        <p>Me formé principalmente en <a href="http://www.untref.edu.ar/carrera/musica" target="blank">música</a> y <a href="http://www.untref.edu.ar/carrera/artes-electronicas"target="blank">artes electrónicas</a>. Mi interés me llevó a estudiar contrabajo pero al acercarme a la <span className="remark">música contemporánea </span>y, dentro de ella, a la electroacústica pude incorporar conocimientos alrededor del <span className="remark">sonido</span> en tanto fenómeno físico y su tratamiento con medios tecnológicos.</p>
                        <p>Conocí la <span className="remark">síntesis analógica</span> gracias a las clases magistrales de <a href="http://djmagla.com/ernesto-romeo-tengo-una-sensacion-de-total-gratitud-por-lo-que-significa-el-arte-y-la-musica-en-mi-vida/" target="blank">Ernesto Romeo</a>, basamento que me permitiría más tarde comprender la <span className="remark">síntesis digital</span> en las clases de <a href="http://cargocollective.com/hernan/Bio" target="blank">Hernán Kerlleñevich</a> y <a href="http://menesavasta.com.ar/" target="blank">Mene Savasta Alsina</a> primero y, luego, de <a href="https://una.edu.ar/docentes/samaruga-lucas-_1246" target="blank">Lucas Samaruga</a>.</p>
                        <p>Soy parte del <a href="https://clic-gba-caba.gitlab.io/" target="blank">nodo GBA-CABA </a> de <span className="remark">CLiC (Colectivo de Live Coders)</span> donde opero como artista, investigadora y productora, aunque también aporto en el <a href="https://colectivo-de-livecoders.gitlab.io/#que-somos" target="blank">nodo La Plata</a>.</p>
                    </section>

      

                    <section id="three">
             
                        <div className="row">
                           
                            <div className="4u 12u$(small)">
                                <ul className="labeled-icons">
                                    <h2>Contacto</h2>
                                     <li>
                                        <h3 className="icon fa-telegram"><span className="label">Telegram</span></h3>
                                        <a href="https://t.me/irisR">@irisR</a>
                                    </li>
                                    <li>
                                        <h3 className="icon fa-envelope-o"><span className="label">Email</span></h3>
                                        <a href="mail:iris.r.saladino@gmail.com">iris.r.saladino@gmail.com</a>
                                    </li>
                                    {/* <li>
                                        <h3 className="icon fa-instagram"><span className="label">Instagram</span></h3>
                                        <a href="https://www.instagram.com/iris.saladino">@iris.saladino</a>
                                    </li> */}
                                </ul>
                            </div>
                        </div>
                    </section>

                </div>

            </Layout>
        )
    }
}

export default HomeIndex
