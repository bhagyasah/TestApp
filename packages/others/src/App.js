import React, { Component } from 'react';
import {Provider} from 'react-redux';
import './App.css';
import RefsExample from './components/RefsExample'
//import Generator from './components/Generators';
//import LetConstVarExample from './components/LetConstVarExamples';
//import {A,B} from './components/ClassA';
//import { SetExample,MapExample,WeakSetExample } from './components/SetAndMap';
//import {BasicExpect} from './redux/components/BasicExpect';
//import ReduxExample1 from './redux/components/ReduxExample1';
//import {testAddCounter} from './redux/components/AvoidingMutation';
import {createStore,combineReducers} from 'redux';
// import TodoApp from './components/TodoApp/TodoApp';
import TravlingSalseProplem,{test} from './travlingSalsePerson';


class App extends Component {
  render() {
    // testAddCounter();
    //Counter();
    // console.log(SetExample());
    // console.log(MapExample());
    // console.log(WeakSetExample());
    //LetConstVarExample();
   // console.log(A.staticVariableInB);
   // console.log(B.staticVariableInB);
    return (
      <div>
    {/* <Provider store={combineReducers()}> */}
     {/* <TodoApp /> */}
     <TravlingSalseProplem />
      {/* </Provider> */}
      </div>
    );
  }
}
export default App;
