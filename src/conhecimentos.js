import React from 'react';
import Html from './IMG/HTML.png';
import Css from './IMG/CSS.png';
import Js from './IMG/JS.png';
import ReactLogo from './IMG/icons8-react-80.png';
import VueJs from './IMG/VUEJS.png';
import NodeJs from './IMG/NODEJS.png';
import Csharp from './IMG/C#.png';
import Php from './IMG/php-80.png';


const Conhecimentos = props => (
    <div>

        <h3>Linguagens que estou estudando:</h3>
        <div class="conhecimentos">
            <div class="card">

                <div class="content">
                    <img src={Html}></img>
                    <h5>HTML</h5>
                </div>

            </div>

            <div class="card">

                <div class="content">
                    <img src={Css}></img>
                    <h5>CSS</h5>
                </div>

            </div>

            <div class="card">

                <div class="content">

                    <img src={Js}></img>
                    <h5>JAVASCRIPT</h5>

                </div>

            </div>
            <div class="card">

                <div class="content">

                    <img src={ReactLogo}></img>
                    <h5>REACT</h5>

                </div>

            </div>
            <div class="card">

                <div class="content">

                    <img src={ReactLogo}></img>
                    <h5>REACT NATIVE</h5>

                </div>

            </div>
            <div class="card">

                <div class="content">

                    <img src={VueJs}></img>
                    <h5>VUEJS</h5>
                </div>

            </div>
            <div class="card">

                <div class="content">

                    <img src={NodeJs}></img>
                    <h5>NODEJS</h5>

                </div>

            </div>
            <div class="card">

                <div class="content">

                    <img
                        src={Csharp}></img>
                    <h5>CSHARP</h5>
                </div>

            </div>
            <div class="card">

                <div class="content">

                    <img src={Php}></img>
                    <h5>PHP</h5>

                </div>

            </div>

        </div>
    </div>
)
export default Conhecimentos
