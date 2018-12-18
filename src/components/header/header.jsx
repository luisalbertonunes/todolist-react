import React from 'react';
import './header.scss';
const Header = () => {
    return (
    <nav className="tarefas">
        <h1 className="text-center titulo_tarefas">Lista de Tarefas React.js <i className="fas fa-atom"></i></h1>
    </nav>
    );
};

export default Header;