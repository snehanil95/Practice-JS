let arr1=[2,3,4]
let arr2=[1,5,6,7]

let temp=[]
let i=0
let j=0
let k=0

while(i<arr1.length && j< arr2.length )
{
   if(arr1[i] > arr2[j])
   {
       temp[k++]=arr2[j++]
       
   }
   else{
       temp[k++]=arr1[i++]
   }
}
console.log(i,j,arr1.length,arr2.length)
if(arr1.length > i)
{
    while( i < arr1.length)
    {
        temp[k++]=arr1[i++]
    }
}

if(arr2.length > j)
{
    while( j < arr2.length)
    {
        temp[k++]=arr2[j++]
    }
}
console.log(temp)
