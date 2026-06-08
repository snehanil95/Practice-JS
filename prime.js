

const result= (n)=>{

if(n >=2)
{
    for(let i=3 ;i<=n/2; i++)

{
    if(n % i === 0)
    {
        return "false"
    }
 
}

return "true"
}
else{
    console.log("Invalid number ")
}
    


}

let n=Number(prompt("Enter String ,For exit press 0:"))

console.log(result(n))
