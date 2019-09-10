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
                    <p>Durante 2016 y 2017 fui <span className="remark">Becaria de Investigación</span>, bajo la dirección de <a target="blank" href="http://arteyciencia.untref.edu.ar/bruno-mesz">Bruno Mesz</a> y la coordinación de <a target="blank" href="http://sebastiantedesco.com/en/works/">Sebastián Tedesco</a>. </p>
                    <p><a target="blank" href="http://sebastiantedesco.com/wp-content/uploads/Resumen-Desarrollos-Aromatorio-low.pdf">Aromatorio</a> es un proyecto avanza en el análisis de las transmodalidades entre la música, la emoción y los aromas, basado en experimentos que estudian <span className="remark">correspondencias entre olfato, gusto y audición.</span></p>
                    <p>En una primera etapa, colaboré con investigaciones de correspondencia entre <span className="remark">textura visual y timbre</span>. Luego investigué la creación de <span className="remark">poemas aromáticos</span>, valiéndome de herramientas de <span className="remark">procesamiento de 
                     lenguaje natural</span> y <span className="remark">análisis sentimental</span> de textos. </p>
                    <p>Aporté en el desarrollo de una <span className="remark">mesa aromática</span> (dispositivo con 16 válvulas que permiten expeler aromas de modo invididual o en combinación, con control de intensidad) y en el de <a target="blank" href="https://brainwine.org/instalaciones/">copas transmodales</a> (que sensan la inclinación al oler/sorber y controlan sonido). Presencié el desarrollo de un <span className="remark">vaso sonoro</span> (que permite oir diferentes tipos de composiciones o eventos sonoros a través de conducción ósea) y colaboré con experimentos que <a target="blank" href="http://www.qianjanicewang.com/">Janice Wang</a> realizó en las instalaciones del Laboratorio donde trabajamos.</p>
                   
                    <p>Esta fue una experiencia muy enriquecedora para mí, no sólo por el caudal de conocimiento que absorbí sino por la calidad humana y la dinámica colaborativa entre les integrantes del proyecto.</p>
                </div>
            </Layout>
        );
    }
}

export default Investigacion