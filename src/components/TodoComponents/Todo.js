import React from 'react';
import TodoForm from './TodoForm';


// Pull all of the components together to form the todo app.
const Todo = (props) => {
    console.log("todo", props);

    // props.id : number key
    // props.task : string task description
    // props.completed : boolean status
    return (
        <div key={props.id} class={props.flag}>{props.task}</div>
    );
}

export default Todo;
