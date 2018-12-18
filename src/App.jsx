import React, { Component } from 'react';
import Header from './components/header/header';
import CardTask from './components/cardTask/cardTask'
import './App.scss';

class App extends Component {
  state = {
    tarefas:[],
    done: false
  }
  cont = 1;

  // adicionar task
  addTaskHandler = (event) => {
    if(event.which === 13 && event.target.value !== ''){
     let  newTask = {
        id: this.cont++,
        nameTask: event.target.value,
        completed: false
      };
      this.setState({tarefas: [...this.state.tarefas, newTask]}, () => {
        console.log(this.state.tarefas);
      });
      event.target.value = '';
    }
  }

  // excluir task
  delTaskHandler = (event) => {
    let delTarget = event.target.closest('li').dataset.id;
    console.log(delTarget);
    this.setState({tarefas: this.state.tarefas.map(m => m).filter(f => f.id !== parseInt(delTarget)), done: false}, () =>{
      console.log(this.state.tarefas);
    });
  }

  //completar task
  complTaskHandler = (event) => {
    console.log(event.target);
    this.setState({done: true});
  }

  render() {
    return (
      <main className="container">
        <Header></Header>
        <CardTask 
          add={this.addTaskHandler} 
          tasks={this.state.tarefas} 
          key={this.state.tarefas.id}
          del={this.delTaskHandler}
          compl={this.complTaskHandler}
          done={this.state.done}
        ></CardTask>
      </main>
    );
  }
}

export default App;
