import React, {Component} from 'react';
import './residencias.css'
import Layout from '../components/layout'

class Tecnica extends Component{
    render(){
        return(
            <Layout>
                <div className="container">
                    <header className="major">
                        <h2 >Estudio Laboratorio La Siesta del Fauno</h2>
                    </header>
                    <p>Hacia finales de 2016 y durante 2017 trabajé con <a target="blank" href="https://electronicgroove.com/entrevista-ernesto-romeo/">Ernesto Romeo</a>, Lucas Romeo y Pablo Gil como <span className="remark">asistente de grabación</span> y aprendiz general. Asistí a muchos de los cursos y clases que se dictan en el Estudio, especialmente de <span className="remark">síntesis analógica</span> y fui plomo de muchas fechas de <a target="blank" href="https://www.youtube.com/watch?v=6APkUa0dkW0">Klauss</a>.</p>
                    <p>Además de conocer a una cantidad enorme de artistas, acá crecí como técnica y como artista por la naturaleza del intercambio de material e información con todas las personas con las que interactué.</p> 
                    <p>Este período fue para mí una fuente de inspiración, disparadora de diversos procesos creativos y de enorme actividad reflexiva tanto artística como ética. El Fauno es una filosofía que se encarna y replica en todas las personas que hemos pasado por allí.</p>
                    <header className="major">
                        <h2 >Atom - Arte Sonoro e Intermedia</h2>
                    </header>
                    <p>Trabajé durante buena parte de 2017 en <a target="blank" href="https://buenosairesconnect.com/atom-bar-fiesta-auriculares-san-telmo/">Atom</a>, por un lado, <span className="remark">operando sonido</span> y realizando <span className="remark">streamings</span> de las presentaciones y, por otro, <span className="remark">gestionando fechas</span>.</p> 
                    <p>Al haber sido un bar orientado al <span className="remark">arte sonoro e intermedia</span>, tuve la oportunidad de trabajar con artistas increíbles como 
                    <a target="blank" href="http://www.findelmundo.com.ar/haro/"> Jorge Haro</a>, <a target="blank" href="https://www.air-noe.at/de/bilder/kuenstler-innen/incoming/franisco-colosanto/biografie-francisco-colasanto.pdf">Francisco Colasanto</a>, el ciclo <a target="blank" href="http://www.signalzirkus.at/">Signal Zirkus</a>, 
                    <a target="blank" href="https://www.ivanamer.com/"> Ivana Mer</a>, entre otres. </p>
                    <header className="major">
                        <h2 >Centro Cultural de la Cooperación</h2>
                    </header>
                    <p>En 2018 trabajé <span className="remark">operando sonido y luces</span> en las salas Solidaridad, Tuñón y Pugliese del <a target="blank" href="https://www.centrocultural.coop/">Centro Cultural de la Cooperación</a> para performances de danza, musicales, teatrales y eventos de índole académica.</p>
                    <p>Aquí también me crucé con artistas de alto calibre pertenecientes a un ámbito diferente al que habitúo y con proyectos de magnitud muchísimo más grande de los que acostumbraba hasta entonces.</p>
                </div>
            </Layout>
        );
    } 
}

export default Tecnica