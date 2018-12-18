import React from 'react';
import './cardTask.scss';
const cardTask = (props) => {
    return(
        <article className="card">
            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="O que você deseja fazer hoje?" onKeyPress={props.add} />
            </div>
            <ul className="lista">
            {props.tasks.map((t,i) => {
                return <li data-id={t.id} key={i} className={props.done === true ? 'active': ''}><i className="fas fa-check" onClick={props.compl}></i> {t.nameTask} <i className="fas fa-times float-right" onClick={props.del}></i></li>
            })}
            </ul>
        </article>
    );
};

export default cardTask;