let arr=[5,3,7,1,2,4,3]

for(let i=0;i<arr.length-1;i++)
{
    let min=arr[i]
        let index=0
    for(let j=i+1;j<arr.length;j++)
    {
        
        if(min > arr[j])
        {
             min =arr[j]
            index=j
           
        }
        
       
    }
     console.log(i,index)
     swap(arr,i,index)
}
console.log(arr)

function swap(arr,i,j)
{
    let temp=0;
    temp=arr[i]
    arr[i]=arr[j]
    arr[j]=temp
}
console.log("Start small. Ship something.");
