import React from 'react';

const Todo = props => <li id={props.id} onClick={() => props.remove(props.id)}>{props.text}</li>

export default Todo;