let obj ={num: 4};

let objFunction = function (a,b,c) {
  return this.num + a + b +c;
}
// console.log(objFunction.call(obj,2));
// console.log(objFunction());
 let arr = [1,2,3];
 //console.log(objFunction.apply(obj,arr));
 let bound = objFunction.bind(obj);
 console.log(bound(1,2,3));