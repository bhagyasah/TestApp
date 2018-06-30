import React,{Component} from 'react';
import {Provider,connect} from 'react-redux';
import Reducers,{store} from './Reducers';


export default class TodoApp extends Component {
	constructor(props){
		super(props);
		this.state={
			value:null,
		}
	}

	changeHandler = () => {
	console.log(this.inputValue.value);
	store.dispatch({
	type:"ADD_TODO",
	id:0,
	text: this.inputValue.value,
	});
}

render(){
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
}
