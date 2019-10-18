import React, { Component } from 'react'
import Gallery from '../components/Gallery'
import Layout from '../components/layout'

import './residencias.css'

import amplify01 from '../assets/images/misc/AmplifyNull.jpg'
import amplify01thumb from '../assets/images/misc/_thumbs/AmplifyNull.jpg'

import lipm01 from '../assets/images/misc/lipm1.jpg'
import lipm01thumb from '../assets/images/misc/_thumbs/lipm1.jpg'

import remote01 from '../assets/images/misc/livecodingCollab.jpg'
import remote01thumb from '../assets/images/misc/_thumbs/livecodingCollab.jpg'

import jack01 from '../assets/images/jack/Jack1.jpg'
import jack02 from '../assets/images/jack/Jack11.jpg'
import jack01thumb from '../assets/images/jack/_thumbs/Jack1.jpg'
import jack02thumb from '../assets/images/jack/_thumbs/Jack11.jpg'

const AMPLIFY_IMAGES = [
  { id: '1', source: amplify01, thumbnail: amplify01thumb },
]

const LIPM_IMAGES = [{ id: '1', source: lipm01, thumbnail: lipm01thumb }]

const REMOTE_IMAGES = [{ id: '1', source: remote01, thumbnail: remote01thumb }]

const JACK_IMAGES = [
  { id: '1', source: jack01, thumbnail: jack01thumb },
  { id: '2', source: jack02, thumbnail: jack02thumb },
]

class Livecoding extends Component {
  render() {
    return (
      <Layout>
        {/* target="blank" href="" */}
        <div id="main">
          <header className="major">
            <h2>Amplify (Mutek)</h2>
          </header>
          <p>
            En Abril de 2019 armamos un conjunto con las live coders del{' '}
            <a
              target="blank"
              href="https://colectivo-de-livecoders.gitlab.io/#que-somos"
            >
              nodo La Plata
            </a>{' '}
            para tocar como teloneras de{' '}
            <a target="blank" href="https://joannnne.github.io/">
              {' '}
              Joanne Armitage
            </a>{' '}
            en el{' '}
            <a
              target="blank"
              href="https://www.buenosaires.gob.ar/museos/museo-sivori"
            >
              {' '}
              Museo Sívori{' '}
            </a>{' '}
            para el <span className="remark">Nano-Mutek</span>.{' '}
          </p>
          <Gallery images={AMPLIFY_IMAGES} />
          <header className="major">
            <h2>L.I.P.M. (Centro Cultural Recoleta)</h2>
          </header>
          <p>
            La primera fecha que realizada en el Laboratorio de Investigación en
            Producción Musical, ubicado en el{' '}
            <a target="blank" href="http://www.centroculturalrecoleta.org">
              {' '}
              Centro Cultural Recoleta
            </a>
            , contó con la presencia de{' '}
            <a
              href="https://ahc.leeds.ac.uk/media/staff/174/dr-joanne-armitage"
              target="blank"
            >
              {' '}
              Joanne Armitage{' '}
            </a>{' '}
            y{' '}
            <a href="https://marianneteixido.github.io/" target="blank">
              {' '}
              Marianne Teixido
            </a>
            , figuras femeninas de importancia en la escena del livecoding
            mundial. Participé como <span classname="remark">coder</span> en un
            script colaborativo y además <span className="remark">produje</span>{' '}
            la fecha.
          </p>
          <p>
            La segunda fecha tocamos de manera individual algunes livecoders. Yo
            presenté un script que contemplaba el control de un reproductor de
            video mediante un puente programado en Python. Usé un video de
            YouTube de{' '}
            <a
              href="https://www.youtube.com/watch?v=YbkIcLHB3r4"
              target="blank"
            >
              {' '}
              Nico Melo
            </a>{' '}
            con un arreglo vocal de una vidala de Atahualpa Yupanqui. Este fue
            el comienzo de mi trabajo con redes sociales y la colaboración entre
            humanos desconocidos. También{' '}
            <span className="remark">
              produje esta fecha además de tocar
            </span>.{' '}
          </p>
          <Gallery images={LIPM_IMAGES} />
          <iframe
            width="400"
            height="228"
            src="https://www.youtube.com/embed/xl8fCUMyeVI"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <header className="major">
            <h2>Rolf Art</h2>
          </header>
          <p>
            Junto a{' '}
            <a
              href="https://www.pagina12.com.ar/218118-flor-de-fueg-la-mecha-del-livecoding"
              target="blank"
            >
              {' '}
              Florencia Alonso{' '}
            </a>{' '}
            intervinimos el cierre de la muestra{' '}
            <a
              target="blank"
              href="http://rolfart.com.ar/exhibition/exposicion-en-tiempo-real/"
            >
              {' '}
              En tiempo real{' '}
            </a>{' '}
            de{' '}
            <a target="blank" href="http://viviangalban.blogspot.com/">
              {' '}
              Vivian Galbán
            </a>
            . Utilizamos un sketck en <span className="remark">
              Processing
            </span>{' '}
            realizado por{' '}
            <a target="blank" href="https://fakevyral.tumblr.com/">
              Martín Silberkasten
            </a>{' '}
            para extraer algunos datos de los retratos digitalizados de la
            muestra, con los que alimentamos algoritmos en{' '}
            <span className="remark">SuperCollider</span> para modificar en
            tiempo real la sonificación.{' '}
          </p>
          <header className="major">
            <h2>Cámara</h2>
          </header>
          <p>
            Pequeño concierto junto a livecoders del{' '}
            <a target="blank" href="https://clic-gba-caba.gitlab.io/">
              {' '}
              nodo GBA-CABA
            </a>{' '}
            en el estudio multimedial de{' '}
            <a target="blank" href="https://www.fernandomolina.org/">
              {' '}
              Fer Molina
            </a>
            . <span className="remark">Produje</span> esta fecha y{' '}
            <span className="remark">toqué</span>.
          </p>
          <header className="major">
            <h2>Planetario de Buenos Aires Galileo Galilei</h2>
          </header>
          <p>
            Intervención en el demoday de{' '}
            <a target="blank" href="https://gridexponential.com/">
              {' '}
              GRID Exponential
            </a>{' '}
            junto a{' '}
            <a target="blank" href="https://flordefuego.github.io">
              {' '}
              Florencia Alonso
            </a>
            ,{' '}
            <a target="blank" href="https://twitter.com/munshkr ">
              {' '}
              Damián Silvani
            </a>{' '}
            y{' '}
            <a target="blank" href="https://www.instagram.com/do.prrr/">
              {' '}
              Pablo Riera
            </a>
            . Fue la{' '}
            <span className="remark">
              primera vez que se hizo live coding en un planetario
            </span>
            . En esta intervención obré como{' '}
            <span className="remark">productora, compositora y coder</span>. Fue
            un hermoso desafío componer desde el live coding para ese recinto,
            con sus posibilidades y limitaciones técnicas.{' '}
          </p>
          <iframe
            width="400"
            height="228"
            src="https://www.youtube.com/embed/h5rZwS680OM"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <header className="major">
            <h2>FLISol C.A.B.A. (Centro Cultural San Martín)</h2>
          </header>
          <p>
            Intervención junto a live coders en la{' '}
            <a
              target="blank"
              href="https://flisol.info/FLISOL2019/Argentina/CABA"
            >
              {' '}
              FLISol C.A.B.A.
            </a>{' '}
            en el{' '}
            <a target="blank" href="http://elculturalsanmartin.org/">
              {' '}
              Centro Cultural San Martín{' '}
            </a>
            .{' '}
          </p>
          <header className="major">
            <h2>NotPinkCon (Arcade Club Social)</h2>
          </header>
          <p>
            El ala femenina del live coding se hizo presente en el cierre de la{' '}
            <a target="blank" href="https://notpinkcon.org">
              {' '}
              NotPinkCon
            </a>
            , realizado en el legendario{' '}
            <a
              target="blank"
              href="https://www.lanacion.com.ar/espectaculos/arcade-club-social-la-casa-que-esconde-la-mejor-seleccion-de-videojuegos-retro-nid2098103"
            >
              {' '}
              Arcade Club Social
            </a>
            . Trabajé con la organización de la conferencia en la{' '}
            <span className="remark">producción</span> de esta fecha, además de{' '}
            <span className="remark">codear</span> un script con samples de la{' '}
            <a target="blank" src="https://www.youtube.com/watch?v=S5t6K9iwcdw">
              entrevista a la robot Sophia
            </a>
            , donde se anuncia que es el primer robot de la historia declarado
            ciudadano de un país.
          </p>
          <iframe
            width="400"
            height="228"
            src="https://www.youtube.com/embed/XiulvCMOX_k"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <header className="major">
            <h2>Avalancha (Club Cultural Matienzo)</h2>
          </header>
          <p>
            <span className="remark">Toqué</span> dos scripts en el marco del
            festival{' '}
            <a
              target="blank"
              href="https://pressreader.com/@nickname13258743/csb_0p91_rm-GDp4w1fVW35Ze3eRpdlFkZiXdawToL6MQhBr-6i2f050iFp4eKFD3vIs"
            >
              {' '}
              Avalancha
            </a>
            , con visuales de{' '}
            <a target="blank" href="https://www.instagram.com/flordefuega/">
              Florencia Alonso
            </a>
            . Abrimos y cerramos la charla del filósofo{' '}
            <a
              target="blank"
              href="https://es.wikipedia.org/wiki/Dar%C3%ADo_Sztajnszrajber"
            >
              {' '}
              Darío Z
            </a>
            .
          </p>
          <iframe
            width="400"
            height="228"
            src="https://www.youtube.com/embed/64Rw43Ei5cA"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <header className="major">
            <h2>Centro Cultural General San Martín</h2>
          </header>
          <p>
            <a target="blank" href="http://zztt.org/bio/">
              Luciano Azzigoti
            </a>{' '}
            me convocó para realizar una presentación en el marco del{' '}
            <a
              target="blank"
              href="http://musiki.org.ar/Laboratorio_de_Performance"
            >
              {' '}
              Laboratorio de Performance de la UNTreF
            </a>
            . La propuesta fue livecoding con input instrumental, en este caso
            con
            <a target="blank" href="https://www.jackadlermckean.eu">
              {' '}
              Jack Adler McKean
            </a>
            .{' '}
          </p>
          <p>
            Me encargué de <span className="remark">producir</span> la fecha.
            Tocamos junto a Leandro Yako y{' '}
            <a target="blank" href=" https://twitter.com/munshkr ">
              {' '}
              Damián Silvani
            </a>
            . Presentamos un{' '}
            <span className="remark">sistema de partitura dinámica</span> que
            nos permitió escribir desde{' '}
            <span className="remark">SuperCollider</span> las particellas para
            Jack, además de escribir allí código para{' '}
            <span className="remark">
              expandir sonoramente la señal entrante de tuba
            </span>
            .
          </p>
          <Gallery images={JACK_IMAGES} />
          <header className="major">
            <h2>Cadaver exquisito en vivo (México-Argentina)</h2>
          </header>
          <p>
            Dentro de diferentes iniciativas para tocar remotamente, elaboramos
            con{' '}
            <a
              target="blank"
              href="https://www.instagram.com/rexmalebka/?hl=en"
            >
              rexmalebka
            </a>{' '}
            la{' '}
            <a
              target="blank"
              href="https://www.youtube.com/watch?v=yjgf-SblV4E&t=195s"
            >
              siguiente dinámica
            </a>
            : en un editor de texto plano colaborativo compartimos líneas de
            código en <span className="remark"> Tidal</span> que ejecutábamos en
            nuestras computadoras. Rex estaba tocando en vivo, de manera que
            contaba con un público que además de oír lo que escribíamos, veía
            nuestra <span className="remark">interacción en tiempo real </span>
            en el pad.
          </p>
          <iframe
            width="400"
            height="228"
            src="https://www.youtube.com/embed/yjgf-SblV4E"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </Layout>
    )
  }
}

export default Livecoding
