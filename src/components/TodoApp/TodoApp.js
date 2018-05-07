import React,{Component} from 'react';
import Reducers,{store} from './Reducers';

export const  TodoApp = (props) => {
	console.log(props);
	const changeHandler = () => {
	console.log(this.inputValue.value);
	store.dispatch({
type:"ADD_TODO",
id:0,
text: this.inputValue.value,
	})
}

console.log(store.getState());
return(
	<div>
	<input type="text" ref={(node) => {this.inputValue = node }} />
	<button onClick={changeHandler}>AddTodo</button>
	<ul>
		{/* {props.data.map(data => <li>{data.text}</li>)} */}
	</ul>
	<ul>
	</ul>
	</div>
);
}

export	const Render = () => {
		console.log(store.getState());
		//let inputValue=null;
		return (
		<TodoApp data={store.getState().todos} />
		);
	}
	store.subscribe(Render);
