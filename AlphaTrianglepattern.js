let n=Number(prompt("Enter number:"))

for(let i=1;i<=n;i++)
{
    let ch=65
    for(let j=1;j<=i;j++)
    {
        process.stdout.write(String.fromCharCode(ch)+" ")
        ch++
    }
    console.log()
}



// Enter number:6
// A 
// A B 
// A B C 
// A B C D 
// A B C D E 
// A B C D E F 
