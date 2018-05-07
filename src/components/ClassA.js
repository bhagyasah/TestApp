import React from 'react';

export class A {
	constructor(name,address,email){
		this.name=name;
		this.address=address;
		this.email=email;
	}
 static staticVariable= "this is static variable";
	registerUser= () => {
		console.log("this is class A "+this.name);
	}

}

export class B extends A{
	constructor(name,address,email){
		super(name,address,email);
		this.name=name;
		this.address=address;
		this.email=email;
	}
static staticVariableInB="this is static variable in B";

	getUserEmail = () =>{
		console.log(this.email)
	}
}

var obj = new B("bhagya","sarlahi","bhagya@gail.com");
console.log(JSON.stringify(obj.getUserEmail()));


