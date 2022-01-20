import React, { Component } from 'react';

export default class ComponentA extends Component {
   
   
    constructor(props){
        super(props);
        this.state = {
            name: "Elvin"
        }
        console.log("ComponenetB constructor");
    }

    static getDerivedStateFromProps(props, state){
        console.log("ComponentB getDerivedStateFromProps");
        return null;
    }

    getSnapshotBeforeUpdate(props,state){
        console.log("ComponentB getSnapshotBeforeUpdate");
    }

    componentDidUpdate(){
        console.log("ComponentB componentDidUpdate")
    }
    
    componentDidMount(){
        console.log("ComponentB componentDidMount")
    }
    render() {
      console.log("ComponentB render");
    return (<div>
        ComponentB
    </div>
    )}
}
