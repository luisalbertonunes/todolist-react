import React from 'react';
import './cardTask.scss';
const cardTask = (props) => {
    return(
        <article className="card">
            <div className="box-buttons">
                <div className="row">
                    <div className="col-sm-6">
                        <button disabled={props.disabled()} className={`btn btn-mark-all float-left ${props.disabled() ? "noworks":""}`} onClick={props.markAll}><span><i className="fas fa-check-double"></i></span> Marcar todos</button>
                    </div>
                    <div className="col-sm-6">
                        <button  disabled={props.disabled()} className={`btn btn-remove-all float-right ${props.disabled() ? "noworks":""}`} onClick={props.removeAll}><span><i className="fas fa-trash-alt"></i></span> Excluir todos</button>
                    </div>
                </div>
            </div>
            <div className="box-tasks">
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="O que você deseja fazer hoje?" onKeyPress={props.add} />
                </div>
                <ul className="lista">
                {props.tasks.map((t,i) => {
                    return <li data-id={t.id} key={i} className={t.completed === true ? 'active': ''}><i className="fas fa-check" onClick={(event) => props.compl(event,t.id)}></i> {t.nameTask} <i className="fas fa-times float-right" onClick={props.del}></i></li>
                })}
                </ul>
            </div>
        </article>
    );
};

export default cardTask;