//import react modules
import React from 'react';
import ReactDOM from 'react-dom';

const element = <h1>Hello World</h1>; //in the real world, element would be our react app

//first element is what we want to pass into the DOM
//second element is where we want it (we grab a reference to the DOM element, in this case, root)
ReactDOM.render(element, document.getElementById('root'));