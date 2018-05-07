import React from 'react';
import {createStore} from 'redux';


export const Counter = (state=0,action)=>{
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
const store = createStore(Counter);
console.log(store.getState());
store.dispatch({type:"INCREMENT"});
console.log(store.getState());


