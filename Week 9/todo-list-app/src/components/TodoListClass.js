import React, { Component } from 'react';
import Todoformclass from './TodoFormClass';
import Todoclass from './TodoClass';

class Todolistclass extends Component {
    constructor(){
        super();
        
        this.state ={
            todos: [],
    
    }
}

    addTodo = todo =>{
        if(!todo.text || /^\s*$/.test(todo.text)){
            return
        }

        const newTodos = [todo,...this.state.todos];
   
        this.setState({
            todos : newTodos
        })
        console.log(...this.state.todos);
   
    }

    updateTodo = (todoId, newValue) =>{
        if(!newValue.text || /^\s*$/.test(newValue.text)){
            return
        }
            this.setState({
            todos : prev =>
            prev.map(item =>(
                item.id === todoId ? newValue : item))
            
        }
        );
       

}

    remoteTodo = id =>{
        const removeArr = [...this.state.todos].filter(todo => todo.id !==id)

        this.setState({
            todos: removeArr
        })
    }

   

    completeTodo = id =>{
        let updatedTodos = this.state.todos.map(todo =>{
            if(todo.id === id){
                todo.isComplete =!todo.isComplete
            }
            return todo;
        });
        this.setState({
            todos : updatedTodos
        })
    }

    render() {
        return (
            <div>
                <h1>Wazz the Plan?</h1>
                <Todoformclass onSubmit={this.addTodo} />
                <Todoclass updateTodo={this.updateTodo} removeTodo={this.remoteTodo} todos={this.state.todos} completeTodo={this.completeTodo}/>
            </div>
        );
    }
}

export default Todolistclass;
