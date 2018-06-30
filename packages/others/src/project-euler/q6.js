let sum = 0;
let sqArray=[];
let simpArray=[];
for(let i=1; i<=100; i++){
 sqArray.push(i*i);
 simpArray.push(i);
}

const sumOfSqArray= sqArray.reduce((total,next) => {
  return total + next;
},0);


const sumOfsimpleArray= simpArray.reduce((total,next) => {
  return total+next;
},0);

console.log('result is', Math.pow(sumOfsimpleArray,2) - sumOfSqArray);

