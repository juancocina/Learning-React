import React, { Component } from 'react';
class Counter extends Component {
    state = { //any data that the component needs
        count: 0,
    };
    /*
    constructor() { // first we have to call the parent constructor
        super();
        //in javascript, functions are objects, therefore have
        this.handleIncrement = this.handleIncrement.bind(this); //this method returns a new function
    }
    */
    // using an arrow function is faster than the commented out approach above...
    // use arrow to bind handlers...
    handleIncrement = (id) => { //In this event handler, we do not have access to 'this'
        //inherent a method from base component, we have to tell react what has changed
        console.log(id);
        this.setState({ count: this.state.count + 1}) 

        //obj.method();
        //function(); by default returns a reference to the window object,
        // if strict mode is enabled, will return undefined...
    }

    render() { 
        return (
            <div>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button onClick={ () => this.handleIncrement({id: 1})} 
                className="btn btn-secondary btn-sm">Incremenet</button>
            </div>
        );
    }

    getBadgeClasses() {
        let classes = "bg m-2 bg-";
        classes += (this.state.count === 0) ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const { count } = this.state; //we pick the count property from state to use it
        return count === 0 ? "Zero" : count; //since jsx can be converted, we can use h1 instead of string
    }
}
 
export default Counter;