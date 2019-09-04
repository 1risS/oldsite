import React, {Component} from 'react';
import './residencias.css'
import Layout from '../components/layout'

class Investigacion extends Component{
    render(){
        return(
            <Layout>
                <div className="container">
                    <header className="major">
                        <h2 >Aromatorio (UNTreF)</h2>
                    </header>
                    <p>Durante 2016 y 2017 fui Becaria de Investigación, bajo la dirección de <a href="">Bruno Mesz</a> y la coordinación de <a href="">Sebastián Tedesco</a>. <a href="">Aromatorio</a> es un proyecto avanza en el análisis de las transmodalidades entre la Música, la Emoción y los Aromas, basado en experimentos que estudian correspondencias entre olfato, gusto y audición.
                     En una primera etapa, colaboré con investigaciones de correspondencia entre textura visual y timbre. Luego investigué la creación de poemas aromáticos, valiéndome de herramientas de procesamiento de 
                     lenguaje natural y análisis sentimental de textos. Aporté en el desarrollo de una mesa aromática (dispositivo con 16 válvulas que permiten expeler aromas de modo invididual o en combinación, con control de la intensidad de cada uno), ví el desarrollo de un vaso sonoro (que permitía oir diferentes tipos de composiciones o eventos sonoros a través de conducción ósea) y el de copas .</p>
                </div>
            </Layout>
        );
    }
}

export default Investigacion