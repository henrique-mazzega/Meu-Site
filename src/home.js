import React from 'react';
import Minhafoto from './IMG/minhafoto 2.png';
import In from './IMG/linkedin-black.png';

const Home = props => (
    <div class="home">
        <img class="minhafoto" src={Minhafoto} alt="minhafoto"></img>
        <h1>Henrique Mazzega</h1>
        <h2>Iniciante em Desenvolvimento Web</h2>
        <div>
            <a class="linkedin-foto" href="https://www.linkedin.com/in/henrique-lopes-mazzega-88105a238/"
                target="_blank" rel="noopener noreferrer">
                <img src={In} alt="In"></img>
            </a>
        </div>
    </div>
)
export default Home
