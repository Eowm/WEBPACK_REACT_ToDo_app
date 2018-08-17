import React from 'react';
import style from "./Todo.css";

const Todo = props => <li className={style.i} id={props.id} onClick={() => props.remove(props.id)}>{props.text}</li>

export default Todo;