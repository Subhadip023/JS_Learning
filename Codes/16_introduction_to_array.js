const fruts=["mango","orange","limbu"];
console.log(fruts[0])
console.log(fruts[1])
console.log(fruts[2])
console.log(fruts[4])//  this will be undefined as index 4 is not present in array 

fruts[2]="apple";// array is mutable string is immutable
console.log(fruts)// array is an object 
console.log(typeof(fruts))// array is an object 

// print the array using for loop
for(let i=0;i<fruts.length;i++){
    console.log(fruts[i])
}
