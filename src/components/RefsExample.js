import React, { Component } from 'react';


class RefsExample extends Component {
  onClick = () => {
    console.log(this.firstName.value);
  }

  onKeyUp=(target, e) => {
    if(e.keyCode===13){
      console.log(e.target.value,target)
    switch(target){
      case 'firstName':
      this.lastName.focus();
      break;
      case 'lastName':
      this.age.focus();
      break;
      case 'age':
      this.submit.focus();
      break;
      default:
      this.firstName.focus();
    }
  }
}
  render() {
    return (
      <div>
        <span> First Name</span>
        <input

        onKeyUp={this.onKeyUp.bind(this, "firstName")}
        ref={(input) => {this.firstName = input}}
        type = "text" /><br />
         <span> last Name</span>
        <input
        onKeyUp={this.onKeyUp.bind(this, "lastName")}
        ref={(input) => {this.lastName = input}}
        type = "text" /><br />
         <span> Age</span>
        <input
        onKeyUp={this.onKeyUp.bind(this, "age")}
        ref={(input) => {this.age = input}}
        type = "text" /><br />
        <input type="submit"
        ref={(submit) => this.submit=submit}
        value="submit"
        onClick={this.onClick} />
      </div>
    );
  }
}

export default RefsExample;
