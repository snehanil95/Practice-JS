let unit=Number(prompt("Enter Amount:"))
console.log(unit)
let amount
if(unit <= 100)
{
    amount=unit*4.2
}

else if( unit <=200)
{
   amount=(100*4.2)+((unit-100)*6)
}

else if( unit <=400)
{
      amount=(100*4.2)+(100*6)+((unit - 100)*8)
}
else{
amount=(100*4.2)+(100*6)+(200*8)+((unit-400)*13)
}

console.log(amount)
