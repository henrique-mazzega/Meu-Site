import React from 'react';
import './menu.css';
import './cards.css';
import './style.css';
import Menu from './menu';
import Content from './content';
import { BrowserRouter } from 'react-router-dom';

const App = props => (
    <div id='app'>
        <BrowserRouter>
            <Menu></Menu>
            <Content></Content>

        </BrowserRouter>
    </div>
)
export default App
