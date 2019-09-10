import React from 'react'
import Helmet from 'react-helmet'
import './index.css'

import Layout from '../components/layout'
// import Lightbox from 'react-images'
import Gallery from '../components/Gallery'

import thumb01 from '../assets/images/thumbs/01.jpg'
import thumb02 from '../assets/images/thumbs/02.jpg'
import thumb03 from '../assets/images/thumbs/03.jpg'
import thumb04 from '../assets/images/thumbs/04.jpg'
import thumb05 from '../assets/images/thumbs/05.jpg'
import thumb06 from '../assets/images/thumbs/06.jpg'

import full01 from '../assets/images/fulls/01.jpg'
import full02 from '../assets/images/fulls/02.jpg'
import full03 from '../assets/images/fulls/03.jpg'
import full04 from '../assets/images/fulls/04.jpg'
import full05 from '../assets/images/fulls/05.jpg'
import full06 from '../assets/images/fulls/06.jpg'

const DEFAULT_IMAGES = [
    { id: '1', source: full01, thumbnail: thumb01, caption: 'Photo 1', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.'},
    { id: '2', source: full02, thumbnail: thumb02, caption: 'Photo 2', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.'},
    { id: '3', source: full03, thumbnail: thumb03, caption: 'Photo 3', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.'},
    { id: '4', source: full04, thumbnail: thumb04, caption: 'Photo 4', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.'},
    { id: '5', source: full05, thumbnail: thumb05, caption: 'Photo 5', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.'},
    { id: '6', source: full06, thumbnail: thumb06, caption: 'Photo 6', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.'}
];

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