import React from 'react';
import {createStore,combineReducers} from 'redux';
import expect from 'expect';
import deepFreeze from 'deep-freeze';

// //avoiding array mutation ..............................................................................................................
// const addCounter = (list) => {
// 	//list.push(0);// this mutate the original array
// 	//var list = list.concat([0]); // this is not mutating the original array its returns new array;
// 	var list = [...list,0]; //same in es6 style concating array element;
// 	return list;
// }

// export const testAddCounter = () => {
// 	const listBefore = [];
// 	const listAfter = [0];
// 	deepFreeze(listBefore);
// 	expect(addCounter(listBefore)).toEqual(listAfter);
// }
//  const removeCounter = (list,index) => {
// 	//	list.splice(index,1); this is mutation method
// 		//var list = list.slice(0,index).concat(list.slice(index+1));
// 		var list = [...list.slice(0,index),...list.slice(index+1)]
// 	return list;
// }

// export const testRemoveCounter = () => {
// 	const listBefore=[0,10,20];
// 	const listAfter=[0,20];
// 	//deepFreeze(listBefore);
// 	expect(removeCounter(listBefore,1)).toEqual(listAfter);
// }

// const incrementCounter = (list,index) => {
// //list[index]++; this is mutating list method
// //return list;``
// // in old method....
// // return list
// // .slice(0,index)
// // .concat(list[index]+1)
// // .concat(list.slice(index+1));
// // in es 6 style..
// return [
// 	...list.slice(0,index),
// 	list[index]+1,
// 	 ...list.slice(index+1)];
// }

// export const testIncrementCounter = () => {
// 	const listBefore=[0,10,20,30];
// 	const listAfter = [0,11,20,30];
// 	deepFreeze(listBefore);
// 	expect(incrementCounter(listBefore,1)).toEqual(listAfter)
// }



// testAddCounter();
// testRemoveCounter();
// testIncrementCounter();

// //.............................................................................................................
// //Avoiding Object mutation.......................................................................................

// const toggleTodoo= (todo)=>{
// 	//return Object.assign({},todo,{completed: !todo.completed}) in es 6 style

// 	return {...todo,completed: !todo.completed} // its cool
// }

// const testToggleTodo = () => {
// 	const todoBefore = {
// 		id:0,
// 		text: 'learn Redux',
// 		completed: false
// 	}
// 	const todoAfter = {
// 		id:0,
// 		text: 'learn Redux',
// 		completed: true
// 	}
// 	deepFreeze(todoBefore);
// 	expect(toggleTodoo(todoBefore)).toEqual(todoAfter);
// }
// testToggleTodo();
// //..........................................................................
// // Todo list Reducer examples....................................................................


// export const testAddTodo = () => {
// 	var stateBefore=[];
// 	var action={
// 		id:0,
// 		type: "ADD_TODO",
// 		text: "Learn Redux",
// 	}

// 	var stateAfter = [{
// 	id: 0,
// 	text: "Learn Redux",
// 	completed: false
// 	}];
// 	deepFreeze(action);
// expect(todos(stateBefore,action)).toEqual(stateAfter);
// }

const todo = (state,action) => {
	switch(action.type){
		case "ADD_TODO":
		return {
				id: action.id,
				text: action.text,
				completed: false
			};
			case "TOGGLE_TODO":
				if(state.id===action.id){
					return {...state, completed: !state.completed}
				}
				return state;
				default:
				return state;
	}
}


const todos = (state=[],action) => {
	switch(action.type){
		case "ADD_TODO":
		return [
			...state,
			todo(undefined,action)
		];
		break;
		case "TOGGLE_TODO":
		return state.map(t => todo(t,action));
		break;
		default:
		return state;
	}
}

const visibilityFilter = (
	state = 'SHOW_ALL',
	action
) => {
	switch(action.type){
		case 'SET_VISIBILITY_FILTER':
		return action.filter;
		default:
		return state;
	}
}

// const todoApp = (state={},action) => {
// 	return {
// 		todos: todos(state.todos,action),
// 		visibilityFilter: visibilityFilter(state.visibilityFilter,action)
// 	}
// }
// above commented code can be replace by the combine reducer funciton

const todoApp = combineReducers({
	todos,
	visibilityFilter
});

const store=createStore(todoApp);
console.log(store.getState());