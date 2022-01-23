import React, { Component } from 'react';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';
import TodoForm from './TodoForm';
import Todolistclass from './TodoListClass';

class Todoclass extends Component {

    constructor(props){
        super(props)
        this.state = {
            id: null,
            value : ''
        }

        
    }

    submitUpdate = value =>{
        this.props.updateTodo(this.state.id, value)

        this.setState({
            id: null,
            value:''
        });
       
    };
    


    render()
     {
        if(this.state.id){
            return <TodoForm edit={this.state} onSubmit={this.submitUpdate}/>
        }
        
        return this.props.todos.map((todo, index) => (
            <div className={todo.isComplete ? 'todo-row complete': 'rodo-row'} key={index}>

                <div key={todo.id} onClick={()=> this.props.completeTodo(todo.id)}>
                    {todo.text}
                </div>
                <div className="icons">
                    <RiCloseCircleLine onClick={() => this.props.removeTodo(todo.id)} className="delete-icon"/>
                    <TiEdit onClick={() => this.setState({id : todo.id, value : todo.text})} className="edit-icon"/>
                </div>
            </div>
        ))
    }
}

export default Todoclass;
