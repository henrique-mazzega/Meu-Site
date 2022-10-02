import React from 'react';
import './menu.css';
import './style.css';
import './responsivo.css';
import './home.css';
import './sobre.css';
import './conhecimentos.css';
import './contato.css';
import Menu from './menu';
import Rotas from './rotas';
import { BrowserRouter } from 'react-router-dom';

const App = props => (
    <div id='app'>
        <BrowserRouter>
            <Menu></Menu>
            <Rotas></Rotas>

        </BrowserRouter>
    </div>
)
export default App
