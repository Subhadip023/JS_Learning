// async await >> promise chains >> Callback hell 

// exapmle of sync programing 
// console.log("one")
// console.log("two")
// console.log("three")


// exapmle of async programing 

// console.log("one")
// console.log("two")
// setInterval(()=>{
//     console.log("hellow from set time out")
// },4000)

// console.log("three")
// console.log("four")


//  Example of call back 
const sum =(a,b)=>{
    return a+b;
}
const sub =(a,b)=>{
    return a-b;
}
const mul =(a,b)=>{
    return a*b;
}

function calculater(a,b,opration){
    return opration(a,b)
}

console.log(calculater(12,6,sum))
console.log(calculater(12,6,sub))
console.log(calculater(12,6,mul))
