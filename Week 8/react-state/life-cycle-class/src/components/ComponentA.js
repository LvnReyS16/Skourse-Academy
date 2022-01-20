import React, { Component } from 'react';

export default class ComponentA extends Component {
   
   
    constructor(props){
        super(props);
        this.state = {
            name: "Elvin"
        }
        console.log("ComponenetA constructor");
    }

    static getDerivedStateFromProps(props, state){
        console.log("ComponentA getDerivedStateFromProps");
        return null;
    }

    getSnapshotBeforeUpdate(props,state){
        console.log("ComponentA getSnapshotBeforeUpdate");
        return null
    }

    componentDidUpdate(){
        console.log("ComponentA componentDidUpdate")
    }
    
    componentDidMount(){
        console.log("ComponentA componentDidMount")
    }


    changeName =() =>{
        this.setState({
            name: this.state.value
        }
            
        )
    }
    render() {
      console.log("ComponentA render");
    return (<div>
        ComponentA
        <button onClick={this.changeName}></button>
    </div>
    )}
}
