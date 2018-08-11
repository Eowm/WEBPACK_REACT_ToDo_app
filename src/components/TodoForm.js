import React from 'react';

const TodoForm = props => (
			<form onSubmit={props.add(props.value)}>
				<label>What do you need to do?
					<input type="text" value={props.value} onChange={(ev) => props.updateValue(ev.target.value)} />
				</label>
				<input type="submit" value="Submit" />
			</form>
	)

	export default TodoForm;