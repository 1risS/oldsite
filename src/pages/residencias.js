import React, { Component } from 'react'
import Gallery from '../components/Gallery'
import Layout from '../components/layout'

import './residencias.css'

import caso01 from '../assets/images/caso/Caso1.jpg'
import caso02 from '../assets/images/caso/Caso2.jpg'
import caso03 from '../assets/images/caso/Caso3.jpg'
import caso01thumb from '../assets/images/caso/_thumbs/Caso1.jpg'
import caso02thumb from '../assets/images/caso/_thumbs/Caso2.jpg'
import caso03thumb from '../assets/images/caso/_thumbs/Caso3.jpg'

const CASO_IMAGES = [
  {
    id: '1',
    source: caso01,
    thumbnail: caso01thumb,
  },
  {
    id: '2',
    source: caso02,
    thumbnail: caso02thumb,
  },
  {
    id: '3',
    source: caso03,
    thumbnail: caso03thumb,
  },
]

class Residencias extends Component {
  render() {
    return (
      <Layout>
        <div className="container">
          <header className="major">
            <h2>Investigación en Tecnología aplicada a la Danza (InTAD)</h2>
          </header>
          <p>
            Participé en 2017 de{' '}
            <a
              target="blank"
              href="http://www.redisadoralatina.com/index.php/2017/09/11/3a-residencia-artistica-en-tecnologia-interactiva/"
            >
              la residencia del InTAD
            </a>{' '}
            en el Centro de Arte Sonoro, perteneciente a la Casa Nacional del
            Bicentenario.
          </p>
          <p>
            En este proyecto, dirigido por{' '}
            <a target="blank" href="http://anibalzorrilla.blogspot.com/">
              Anibal Zorrilla
            </a>
            , aprendí a usar{' '}
            <a target="blank" href="https://troikatronix.com/">
              Isadora
            </a>{' '}
            y me tocó hacer equipo con{' '}
            <a target="blank" href="https://diegodorado.github.io/">
              Diego Dorado
            </a>{' '}
            y{' '}
            <a target="blank" href="https://www.ceiborg.com/">
              Eliana Guzmán
            </a>
            .{' '}
          </p>
          <Gallery images={CASO_IMAGES} />
          <header className="major">
            <h2>GRAME en la UNSaM</h2>
          </header>
          <p>
            {' '}
            Organizada por{' '}
            <a target="blank" href="http://www.unsam.edu.ar/institutos/kagel/">
              el Instituto de Artes Mauricio Kagel
            </a>{' '}
            en 2017, esta serie de{' '}
            <a
              target="blank"
              href="http://www.unsam.edu.ar/workshop-grame/actividades.asp"
            >
              workshops
            </a>{' '}
            a cargo del{' '}
            <a
              target="blank"
              href="http://www.grame.fr/qui-sommes-nous/missions-et-activites"
            >
              GRAME (Francia){' '}
            </a>
            me permitió conocer el trabajo de{' '}
            <a target="blank" href="https://www.sebastian-rivas.com/">
              Sebastián Rivas
            </a>
            ,{' '}
            <a target="blank" href="https://www.lisilog.com/chris_bio/">
              {' '}
              Cristophe Lebreton
            </a>{' '}
            y{' '}
            <a target="blank" href="https://jeangeoffroy.wordpress.com/">
              Jean Geoffroy
            </a>
            , en el que se cruzan diversas disciplinas artísticas y tecnologías.
          </p>
          <p>
            Aprendí a usar{' '}
            <a target="blank" href="https://faust.grame.fr/">
              Faust
            </a>{' '}
            y el{' '}
            <a
              target="blank"
              href="https://www.youtube.com/watch?v=Z8pVhauTel4"
            >
              Light Wall System
            </a>
            .
          </p>
        </div>
      </Layout>
    )
  }
}

export default Residencias
