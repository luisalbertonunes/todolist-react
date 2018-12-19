import React, { Component } from 'react';
import Header from './components/header/header';
import CardTask from './components/cardTask/cardTask'
import './App.scss';

class App extends Component {
  state = {
    tarefas:[],
    todos_marcados: false
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
  complTaskHandler = (event, id) => {
    console.log(event.target, id);
    this.setState({tarefas:this.state.tarefas.map(m =>
      { 
        if(m['id'] === id){
          if(m['completed'] === true){
            m.completed = false;
          }else{
            m.completed = true;
          }
        } 
        return m;
      })
    });
  }

  //marcar todos completos
  markAllHandler = (event) => {
    let arrays = [...this.state.tarefas];
    let flag = false;
    if (this.state.todos_marcados) {
      flag = false;
    } else {
      flag = true;
    }
    arrays.map((m) => m.completed = flag);
    this.setState({tarefas: arrays});
    this.setState({todos_marcados: flag});
    // this.setState({...this.state.tarefas.map(m =>  {
    //   console.log(m);
    //   return m.completed = true;
    // })}, () => console.log(this.state.tarefas));
  }

  //remove todos
  removeAllHandler = (event) => {
    console.log(event.target);
    this.setState({tarefas: []}, () => console.log(this.state.tarefas));
    this.setState({todos_marcados: false})
  }

  checkButtonHandler = () => {
    return this.state.tarefas.length === 0;
  }

  render() {
    return (
      <main className="container">
        <Header></Header>
        <CardTask 
          disabled={this.checkButtonHandler}
          add={this.addTaskHandler} 
          tasks={this.state.tarefas} 
          key={this.state.tarefas.id}
          del={this.delTaskHandler}
          compl={this.complTaskHandler}
          markAll={this.markAllHandler}
          removeAll={this.removeAllHandler}
        ></CardTask>
      </main>
    );
  }
}

export default App;
