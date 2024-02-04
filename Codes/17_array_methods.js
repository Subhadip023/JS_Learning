//  array methods 
let num=[1,2,34,45,67]
let string_num=num.toString(num)
console.log(typeof(num))
console.log(typeof(string_num))
let c=num.join('_');
console.log(c,typeof(c))// output 1_2_34_45_67 string
num.pop()//reurn the pop elments (last Element)
console.log(num)
num.push(10)// add 10 to the last elemnt // return new array length
console.log(num)
num.shift()//retuen 1st element and remove it
console.log(num)
num.unshift(10)// add the element in the 1st and return new arrray lenght
console.log(num)