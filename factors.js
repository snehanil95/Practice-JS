const result= (n)=>{
    let fact=1
    for(let i=1 ;i<=n/2 ;i++)
{
  if(n % i == 0)
  {
      console.log(i)
  }
}
console.log(n)
}
result(10)
