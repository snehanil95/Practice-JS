  let n=Number(prompt("Enter a number:"))
  n=2*n
  for(let i=1;i<=n; i++)
  {
      for(let j=1;j<=n ;j++)
      {
          if(i == j   )
          process.stdout.write("* ")
          else
           process.stdout.write("  ")
      }
      
       for(let j=1;j<=n ;j++)
      {
          if(i+j == n  )
          process.stdout.write("* ")
          else
           process.stdout.write("  ")
      }
      console.log()
  }



Enter a number:5
*                                   *   
  *                               *     
    *                           *       
      *                       *         
        *                   *           
          *               *             
            *           *               
              *       *                 
                *   *                   
                  *                     
