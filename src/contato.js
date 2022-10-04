import React from 'react';
import Wpp from './IMG/WPP.png';
import Lin from './IMG/LINKEDIN.png';
import Git from './IMG/icons8-github-80.png';


const Contato = props => (
    <div>
        <h4>Contato</h4>
        <div class="contato">
            <a class="wpp" href="https://api.whatsapp.com/send?phone=5527998630079" target="_blank"
                rel="noopener noreferrer"><img class="contato-icon"
                    src={Wpp} alt="Wpp"></img></a>
            <a class="in" href="https://www.linkedin.com/in/henrique-lopes-mazzega-88105a238/" target="_blank"
                rel="noopener noreferrer"><img class="contato-icon"
                    src={Lin} alt="Lin"></img></a>
            <a class="git" href="https://github.com/henrique-mazzega" target="_blank" rel="noopener noreferrer">
                <img class="contato-icon" src={Git} alt="Git"></img></a>

        </div>
    </div>
)
export default Contato
