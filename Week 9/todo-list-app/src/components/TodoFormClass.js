import React, { Component } from 'react';

class Todoformclass extends Component {

    constructor(props)
    {
        super(props);

        this.state = {
            input: this.props.edit ? this.props.edit.value : '',
        }
       
    }

 

    handleChange = e =>{
        this.setState({
            input : e.target.value
        });
    }

    handleSubmit = e =>{
        e.preventDefault();

        this.props.onSubmit({
            id: Math.floor(Math.random()*1000),
            text : this.state.input
        })
        console.log(this.state.input);
        this.setState({
            input: '',
        })
    }
    render() {
        return (
            <form  onSubmit={this.handleSubmit} className="todo-form">
                <input text="text" placeholder="Add a todo" value={this.state.input} name="text"className='todo-input'
                 onChange={this.handleChange}/>
                <button className="todo-button">Add a todo</button>
            </form>
        );
    }
}

export default Todoformclass;
