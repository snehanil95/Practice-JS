const result= (n)=>{
let rev=0
let sum=0
while(n !== 0)
{
    rem=n%10 
  let fact = 1
  for(let i=1 ;i<=rem ;i++)
  {
      fact=fact*i
  }
    sum+=fact
    n = Math.floor(n/10)
    
}
return sum
}

let n=145
console.log(result(n))
console.log(result(n) === n ? "strong " : "not strong")
