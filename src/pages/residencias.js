import React, {Component} from 'react'
import Layout from '../components/layout'
import './residencias.css'

class Residencias extends Component{

    render(){
        return(
            <Layout>
                <div className="container">
                    <header className="major">
                        <h2 >Investigación en Tecnología aplicada a la Danza (InTAD)</h2>
                    </header>
                    <p>En 2017 fui seleccionada para participar de <a href="http://www.redisadoralatina.com/index.php/2017/09/11/3a-residencia-artistica-en-tecnologia-interactiva/">la residencia del InTAD</a> en el Centro de Arte Sonoro, perteneciente a la Casa Nacional del Bicentenario.</p>
                    <p>En este proyecto, dirigido por <a href="http://anibalzorrilla.blogspot.com/">Anibal Zorrilla</a>, aprendí a usar <a href="https://troikatronix.com/">Isadora</a> y me tocó hacer equipo con <a href="https://diegodorado.github.io/">Diego Dorado</a> y <a href="https://www.ceiborg.com/">Eliana Guzmán</a>. </p> 
                    <header className="major">
                        <h2 >GRAME en la UNSaM</h2>
                    </header>
                    <p> Organizada por <a href="http://www.unsam.edu.ar/institutos/kagel/">el Instituto de Artes Mauricio Kagel</a>, esta serie de <a href="http://www.unsam.edu.ar/workshop-grame/actividades.asp">workshops</a> a cargo del <a href="http://www.grame.fr/qui-sommes-nous/missions-et-activites">GRAME (Francia) </a> 
                    me permitió conocer el trabajo de <a href="https://www.sebastian-rivas.com/">Sebastián Rivas</a>,  <a href="https://www.lisilog.com/chris_bio/"> Cristophe Lebreton</a> y <a href="https://jeangeoffroy.wordpress.com/">Jean Geoffroy</a>, el cual cruza diversas disciplinas artísticas y tecnologías. 
                        </p> 
                    <p>Aprendí a usar <a href="https://faust.grame.fr/">Faust</a> y el <a href="https://www.youtube.com/watch?v=Z8pVhauTel4">Light Wall System</a>.</p>
                </div>
            </Layout>
        );
    }
}

export default Residencias;