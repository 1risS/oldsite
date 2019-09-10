import React, {Component} from 'react';
import './residencias.css'
import Layout from '../components/layout'

class Workshops extends Component{
    render(){
        return(
            <Layout>
                <div className="container">
                    <header className="major">
                        <h2 >Workshops de capacitación en programación para docentes y alumnes</h2>
                    </header>
                    <p>En 2016, 2017 y 2018 viajé por diferentes provincias del país contratada por <a target="blank" href="http://www.institutocrescer.org.br/"> Instituto Crescer</a>, que implementa proyectos tecnológicos educativos en Argentina.</p>
                    <p>Con el equipo docente, enseñamos a programar en <a target="blank" href="https://scratch.mit.edu/">Scratch</a>, luego aplicamos ese conocimiento con <a target="blank" href="https://appinventor.mit.edu/">App Inventor</a> y finalmente con un kit de robótica basado en <a target="blank" href="https://www.arduino.cc/">Arduino</a>.</p>
                     <header className="major">
                        <h2 >Introducción a la luthería digital (UTec)</h2>
                    </header>
                    <p>En 2018 participé de la <a target="blank" href="http://duraznoconf.uy/2018/"> Durazno Conf</a>, en las instalaciones de la <a target="blank" href="https://utec.edu.uy/">Universidad Tecnológica de Uruguay</a>.</p>
                    <p>Enseñé a hacer un <span className="remark">sequencer de 16 pasos</span> con <span className="remark">pure data</span>. Compartí esas jornadas con <a target="blank" href="http://www.unrinteractiva.com.ar/team/mg-fernando-irigaray/">Fernando Irigaray</a>, <a target="blank" href="https://www.linkedin.com/in/msarsale/">Martín Sarsale</a>, <a target="blank" href="https://www.linkedin.com/in/kosamari/"> Mariko Kosaka</a>, <a target="blank" href="http://www.erlang-factory.com/conference/SFBayAreaErlangFactory2009/speakers/BobIppolito">Bob Ipolito</a> y <a target="blank" href="https://aymarasamudio.com/">Aymará Samudio</a>, entre otres.</p>
                
                    <header className="major">
                        <h2 >Nardoz (BONS)</h2>
                    </header>
                    <p>Participé de la <a target="blank" href="https://www.eventbrite.com/e/nardoz-agosto-computational-investment-idaas-at-scale-livecoding-tickets-68297113505#">Nardoz</a> de Agosto de 2019 en las instalaciones de <a target="blank" href="https://www.bons.io/">BONS</a>. </p>
                    <p>Al ser una meetup de <span className="remark">tecnología orientada a la industria</span> encontré un público receptor de mi <span className="remark">demo</span> completamente diferente del que venía encontrando hasta el momento, con una muy buena respuesta. Tuvimos nuevas incorporaciones en <a target="blank" href="https://clic-gba-caba.gitlab.io/">CLiC</a> luego de eso.</p>
                    <header className="major">
                        <h2 >Semana de la Computación (Facultad de Ciencias Exactas - UBA)</h2>
                    </header>
                    <p>En Septiembre participé de la <a target="blank" href="http://sdc.dc.uba.ar/home/charlas/dia-2/">Semana de la Computación</a>, para <span className="remark">difundir la práctica</span> entre estudiantes de la carrera de Computación y adolescentes aspirantes a ingresar.</p>
                    <header className="major">
                        <h2 >DevStories (WorkInn)</h2>
                    </header>
                    <p>En Septiembre de 2019 participé de la <a target="blank" href="https://www.meetup.com/es/meetup-group-UjBxMbef/events/264560210/">DevStories</a>, continuando con la <span className="remark">difusión del LiveCoding</span> en encuentros de tecnología.</p>
                </div>
            </Layout>
        );
    }

}

export default Workshops