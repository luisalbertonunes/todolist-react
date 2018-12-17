import React from 'react';
import './cardTask.scss';
const cardTask = (props) => {
    return(
        <article className="card">
            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="O que você deseja fazer hoje?" onKeyPress={props.add} />
            </div>
            <ul className="lista">
            <li><i className="fas fa-check"></i> Tarefa 1 <i className="fas fa-times float-right"></i></li>
            <li><i className="fas fa-check"></i> Tarefa 2 <i className="fas fa-times float-right"></i></li>
            </ul>
        </article>
    );
};

export default cardTask;