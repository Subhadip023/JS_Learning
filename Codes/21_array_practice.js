// 
// let number =[1,2,3,4,5,55,9,57,78,8,7];
// let input=Number.parseInt(prompt("Enter a number to add in array"))
// number.push(input)


let number =[1,2,3,4,5,55,9,57,78,8,7];
while(true){
    
    let input=Number.parseInt(prompt("Enter a number to add in array"))
    if(input===0){
        
        alert("Stop Input \n")

        break;
    }
number.push(input)
}
alert(number)


// Practice Problem 3
// let arr = [1, 2, 30, 4, 50, 6, 7, 83, 670]
// let n = arr.filter((x)=>{
//   return x%10 == 0
// })
// console.log(n)

// Practice Problem 4
// let arr = [1, 2, 30, 4, 50, 6, 7, 83, 670]
// let n = arr.map((x)=>{
//   return x*x
// })
// console.log(n)

// Practice Problem 5
let arr = [1, 2, 3, 4, 5]
let n = arr.reduce((x1, x2) => {
  return x1 * x2
})
console.log(n)