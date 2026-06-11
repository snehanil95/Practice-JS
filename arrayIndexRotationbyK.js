let arr=[1,2,3,4,5,6,7,8]

let k=Number(prompt("Enter a rotation value:"))
k=k % arr.length
for(let i=0; i<k;i++)
{
    copy=arr[0]
for(let j=0; j<=arr.length-1 ; j++)
{
    arr[j]=arr[j+1]
}
arr[arr.length-1]=copy
}


console.log(arr)
