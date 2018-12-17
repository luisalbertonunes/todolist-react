import React, { Component } from 'react';
import Header from './components/header/header';
import CardTask from './components/cardTask/cardTask'
import './App.scss';

class App extends Component {
  state = {
    tarefas:[
      {nameTask:'Tarefa 1', complete: false}
    ]
  }

  addTaskHandler = (event) => {
    if(event.which === 13){
     let  newTask = {
        nameTask: event.target.value,
        complete: false
      };
      console.log(newTask);
      this.setState({tarefas: [...this.state.tarefas, newTask]}, ()=>{
        console.log(this.state.tarefas);
      });
    }else{
      console.log('errei rude!')
    }
  }

  render() {
    return (
      <main className="container">
        <Header></Header>
        <CardTask add={this.addTaskHandler}></CardTask>
      </main>
    );
  }
}

export default App;
