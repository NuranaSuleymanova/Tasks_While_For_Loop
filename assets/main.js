

/*1. Write a JS code to print numbers from 1 to 10
Function printNumbers() prints numbers from 1 to 10 using for loop.
*/

function printNumbers()
{
for(let i=1;i<=10;i++)
{
    console.log(i);
}
}

printNumbers();




/*
Write a JS code to print Even numbers in given array
Function printEven() prints all the even numbers of a 2D array using for loops and ‘%’ operator.

*/
let num = [
    [1, 2],
    [3, 4],
    [5, 6],
    [7, 8],
    [9, 10]
];
function prinEven() {
   //If we want to use a 3D array, add a 3rd "for loop"
    for (let i = 0; i < num.length; i++) {
        for (let j = 0; j < num[i].length; j++) {
            if (num[i][j] % 2 == 0) 
            { 
                console.log(num[i][j])
             }
        }
    }
}
prinEven();




/*
Write a JS code to print a pattern using for loop
Function printPattern() is used to print a pattern for a given range using nested for loop
*/



function printPattern()
{
    let num=10;
    let print="";
    for(let i=1;i<=num;i++)
    {
        for(let j=1;j<=i;j++)
        {print+=j;}
        
        print +='\n';
        
    }
    
    console.log(print)
    
}


printPattern();

