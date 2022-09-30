

import React from 'react';
import { Link } from 'react-router-dom';

const Menu = props => (
    <nav>
        <ul>
            <li>
                <Link to="/home" >HOME</Link>
            </li>
            <li>
                <Link to="/sobre" >SOBRE</Link>
            </li>
            <li>
                <Link to="/conhecimentos">CONHECIMENTOS</Link>
            </li>
            <li>
                <Link to="/contatos">CONTATO</Link>
            </li>
        </ul>
    </nav>
)
export default Menu
