import React from 'react';
import style from './TodoForm.css'

const TodoForm = props => (
    <form action=''>
        <label htmlFor='task'>What do you have to do?</label>
        <input onChange={(ev) => props.change(ev.target.value)} type='text' id='task' value={props.value}/>
        <button onClick={(ev) => props.add(ev, props.value)}>Add task to list!</button>
    </form>
);

	export default TodoForm;