import React from 'react';
import uuid from 'uuid';
import style from './App.css';
import TodoList from '../components/TodoList';
import TodoForm from '../components/TodoForm';	
import Title from '../components/Title';
import { hot } from 'react-hot-loader';

class App extends React.Component {
	constructor(props){
		super(props);
		this.state = {
      		data: [{
        		id: 1,
        		text: 'clean room'
      		}, 
      		{
      		  id: 2,
      		  text: 'wash the dishes'
      		}, 
      		{
      		  id: 3,
      		  text: 'feed my cat'
      		}],
      		value: ''
    	};
    	this.addTodo = this.addTodo.bind(this);
        this.removeTodo = this.removeTodo.bind(this);
        this.handleChange = this.handleChange.bind(this);
	}

	addTodo(ev, value) {
		ev.preventDefault();
		if(!value){
			return}
		const todo = {
			text: value,
			id: uuid.v4(),
		};
		const data = [...this.state.data, todo];
		this.setState({data, value: ''});
	}

	removeTodo(id) {
		const reminder = this.state.data.filter(todo => todo.id !== id);
		this.setState({data: reminder});
	}

	handleChange(text) {
		this.setState({
			value: text
		});
	}

	render() {
		return(
			<div className={style.TodoApp}>
				<Title title='Lista ToDo' length={this.state.data.length} />
				<TodoForm add={this.addTodo} value={this.state.value} change={this.handleChange}/>
				<TodoList list={this.state.data} remove={this.removeTodo.bind(this)} />
			</div>
			);
	}
}

export default hot(module)(App);