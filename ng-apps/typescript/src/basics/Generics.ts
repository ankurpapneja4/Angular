// Generic Function
function insertAtBegining<T>( arr: T[] , value: T ) : T[]
{
  const newArray   = [value, ...arr];
  return newArray;
}


let strArray = insertAtBegining( [ 'b', 'c', 'd' ], 'a');
let intArray = insertAtBegining( [2, 3, 4],          1 );

console.log( strArray );
console.log( intArray );