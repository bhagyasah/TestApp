import React,{Component} from 'react';
import {createStore} from 'redux';


class ReduxExample1 extends Component{

	Counter = (state=0,action)=> {
	switch(action.type){
		case "INCREMENT":
		return state+1;
		break;
		case "DECREMENT":
		return state-1;
		break;
		default:
		return state;
	}
}

render(){
	const store = createStore(this.Counter);
	const render = () => {
	document.getElementById("element").innerText=store.getState();
}
store.subscribe(render);
document.addEventListener('click',() => {
	store.dispatch({type:"INCREMENT"})
});
return(
	<div id="element"></div>
)
}
}
export default ReduxExample1;