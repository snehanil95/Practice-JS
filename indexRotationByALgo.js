let arr=[1,2,3,4,5,6,7,8]
let temp=[]
let k=Number(prompt("Enter a rotation value:"))

for(let j=0; j<=arr.length-1 ; j++)
{
    temp[j]=arr[(j+k)%arr.length]
}

console.log(temp)


//new array temp
//copy index of arr rotation value + i % arr length into temp
