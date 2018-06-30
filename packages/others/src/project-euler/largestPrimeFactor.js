var integer = 600851475143,
    primeArray = [],
    isPrime;

for(i = 2; i <= integer; i++){
  if (integer % i==0) {

    for(var j = 2; j <= i/2; j++) {
      if(i % j == 0) {
        isPrime = false;
      } else {
        isPrime = true;
      }
    }
    if (isPrime == true) {
      integer /= i;
      primeArray.push(i);
    }
  }
}
  console.log(primeArray);




























