import { Routes, Route } from "react-router-dom";
import React from 'react';
import Home from './home';
import Sobre from './sobre';
import Conhecimentos from './conhecimentos';
import Contatos from './contatos';

const Content = props => (
    <main class="content">
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/conhecimentos" element={<Conhecimentos />} />
            <Route path="/contatos" element={<Contatos />} />
        </Routes>
    </main>
)

export default Content
