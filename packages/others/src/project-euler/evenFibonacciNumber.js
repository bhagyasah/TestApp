let a=1,b=2;
let fabSeries=[];
let sum=0;
fabSeries.push(a);
fabSeries.push(b);
for(let i=0; fabSeries[i] < 4000000; i++){
  fabSeries.push(fabSeries[i]+fabSeries[i+1]);
  if(fabSeries[i] % 2 ===0){
    sum=sum+fabSeries[i];
  }
}
console.log(sum);
console.log(fabSeries);
