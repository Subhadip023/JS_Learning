// map filter reduce

let arr=[45,23,21]
let a=arr.map((values)=>{
console.log(values)
return values+1;
})
console.log(a)

// filter retrn the value which is true 



// Array filter method
let arr2 = [45, 23, 21, 0, 3, 5]
let a2 = arr2.filter((a) => {
  return a < 10
})
// console.log(a2, arr2)

// Array reduce method
let arr3 = [1, 2, 3, 5, 2, 1]
const reduce_func = (h1, h2) => {
  return h1 + h2
}
let newarr3 = arr3.reduce(reduce_func)
console.log(newarr3)