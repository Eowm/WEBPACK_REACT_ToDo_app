import React from 'react';
import Todo from './Todo.js';
import style from './TodoList.css';

const TodoList = props => {
	const todoListElments = props.list.map(element => <Todo id={element.id} key={element.id} remove={props.remove} text={element.text} />)
		return (
		<div className={style.TodoList}>
			<ul>{todoListElments}</ul>
		</div>
		)
}

export default TodoList;