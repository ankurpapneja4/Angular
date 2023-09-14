// 1. Return Type can be implicitly infered
function sum( a: number, b: number)  
{
  return a + b;
}


// 2. Return Type explicitly declared
function sum2( a: number, b: number) : number 
{
    return a + b;
}

// 3. 'void' Return Type
function printSum( a: number, b: number) : void 
{
  console.log( a + b );
}

const total1 = sum( 1, 3 );
const total2 = sum( 3, 7 );


console.log( total1 );
console.log( total2 );