import React from 'react';

var Generator = function *() {
	var one= yield 5;
	var two = yield 2;
	var three = yield 3;
	//console.log(one,two,three);
}

var gen = Generator();
console.log(gen.next(2));
console.log(gen.next(10));
console.log(gen.next("bhagya"));
console.log(gen.next());
console.log(gen.next());


export default Generator;