function sumPrimeIndex(arr){
    const primeArr = arr.filter((x,i)=>{
        return isPrime(i)
    })
    const initialValue = 0;
    const sumWithInitial = primeArr.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    initialValue
    );
   return sumWithInitial
}

function isPrime(n){
    if(n<2) return false
    for(let i=2;i<=Math.sqrt(n);i++){
        if(n%i==0){
            return false
        }
    }
    return true
}

console.log(sumPrimeIndex([1, 2, 3, 4, 5, 6, 7]))


//ssss