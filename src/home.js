import React from 'react';
import ReactDom from 'react-dom';
import Minhafoto from './IMG/minhafoto 2.png';
import In from './IMG/linkedin-black.png';

const Home = props => (
    <div class="introduçao">
        <img class="minhafoto" src={Minhafoto}></img>
        <h1>Henrique Mazzega</h1>
        <h2>Iniciante em Desenvolvimento Web</h2>
        <div>
            <a class="linkedin-foto" href="https://www.linkedin.com/in/henrique-lopes-mazzega-88105a238/"
                target="_blank" rel="noopener noreferrer">
                <img src={In}></img>
            </a>
        </div>
    </div>
)
export default Home
