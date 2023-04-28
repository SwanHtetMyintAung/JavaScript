function SeriesSum(n)
{
  let sum = 0;
  let divisor = 1;

  for(let i=0; i < n ; i++){
    sum += 1 / divisor ;
    divisor += 3;
  }
  return sum.toFixed(2)
}
console.log(SeriesSum(3))
console.log(SeriesSum(1))