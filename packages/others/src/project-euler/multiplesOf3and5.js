const x= 1000;
let sum =0;
let list=[];

for (let i = 1; i<1000; i++){
if(i % 3 ===0 || i%5 ===0){
  sum = sum+i;
  list.push(i)
}
}

console.log('sum',sum);
console.log(list);