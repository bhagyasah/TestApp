
export const SetExample = ()=> {
	let array1=[1,2,3,4,5];
	let setValue= new Set(array1);
	setValue.add("bhagya");
	console.log(setValue);
	setValue.delete(1);
		setValue.add({name:"rajiv",address:"sarlahi"});
		setValue.delete({name:"rajiv"});
	console.log(setValue)
}

export const MapExample = () => {
	var mapValue = new Map([['a',"bhagya"]]);
	mapValue.set('b',21);
	console.log(mapValue);
}

export const WeakSetExample = () => {
	let weakSetVaue= new WeakSet();
	let car1={
		name:"honda",
		model:"jpt"
	}
	weakSetVaue.add(car1);

	console.log(weakSetVaue);

}
//weakMap is also same;
