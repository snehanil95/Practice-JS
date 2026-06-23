let arr=[5,3,7,1,2,4,4]

for(let i=0;i<arr.length-1;i++)
{
  
    for(let j=0;j<arr.length-1-i;j++)
    {
        
        if(arr[j] < arr[j+1])
        {
            console.log(i,j)
         swap(arr,j,j+1)
           
        }
        
       
    }
 
     
}
console.log(arr)

function swap(arr,i,j)
{
    let temp=0;
    temp=arr[i]
    arr[i]=arr[j]
    arr[j]=temp
    
    console.log(arr)
}
console.log("Start small. Ship something.");
