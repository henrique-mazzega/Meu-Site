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
                    <img src={Html} alt="html"></img>
                    <h5>HTML</h5>
                </div>

            </div>

            <div class="card">

                <div class="content">
                    <img src={Css} alt="Css"></img>
                    <h5>CSS</h5>
                </div>

            </div>

            <div class="card">

                <div class="content">

                    <img src={Js} alt="Js"></img>
                    <h5>JAVASCRIPT</h5>

                </div>

            </div>
            <div class="card">

                <div class="content">

                    <img src={ReactLogo} alt="ReactLogo"></img>
                    <h5>REACT</h5>

                </div>

            </div>
            <div class="card">

                <div class="content">

                    <img src={ReactLogo} alt="ReactLogo"></img>
                    <h5>REACT NATIVE</h5>

                </div>

            </div>
            <div class="card">

                <div class="content">

                    <img src={VueJs} alt="VueJs"></img>
                    <h5>VUEJS</h5>
                </div>

            </div>
            <div class="card">

                <div class="content">

                    <img src={NodeJs} alt="NodeJs"></img>
                    <h5>NODEJS</h5>

                </div>

            </div>
            <div class="card">

                <div class="content">

                    <img
                        src={Csharp} alt="Csharp"></img>
                    <h5>CSHARP</h5>
                </div>

            </div>
            <div class="card">

                <div class="content">

                    <img src={Php} alt="Php"></img>
                    <h5>PHP</h5>

                </div>

            </div>

        </div>
    </div>
)
export default Conhecimentos
