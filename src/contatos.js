import React from 'react';
import Wpp from './IMG/WPP.png';
import Lin from './IMG/LINKEDIN.png';
import Git from './IMG/icons8-github-80.png';


const Contatos = props => (
    <div class="contato">
        <h4>Contato</h4>
        <footer>
            <a class="wpp" href="https://web.whatsapp.com/send?phone=55027998630079" target="_blank"
                rel="noopener noreferrer"><img
                    src={Wpp} alt="Wpp"></img></a>
            <a class="in" href="https://www.linkedin.com/in/henrique-lopes-mazzega-88105a238/" target="_blank"
                rel="noopener noreferrer"><img
                    src={Lin} alt="Lin"></img></a>
            <a class="git" href="https://github.com/henrique-mazzega" target="_blank" rel="noopener noreferrer">
                <img src={Git} alt="Git"></img></a>
        </footer>
    </div>
)
export default Contatos
