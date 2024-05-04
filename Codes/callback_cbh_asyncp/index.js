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
// const sum =(a,b)=>{
//     return a+b;
// }
// const sub =(a,b)=>{
//     return a-b;
// }
// const mul =(a,b)=>{
//     return a*b;
// }

// function calculater(a,b,opration){
//     return opration(a,b)
// }

// console.log(calculater(12,6,sum))
// console.log(calculater(12,6,sub))
// console.log(calculater(12,6,mul))

// Callback hell
// function getData(dataId,getNextData) {
//   setTimeout(() => {
//     console.log("data", dataId);
//     if (getNextData) {
//       getNextData();
//     }
//   }, 2000);// 2000 menas 2 see 
// }

// // Callback hell to solved it we use promises
// getData(1,()=>{
//   getData(2,()=>{
//     getData(3,()=>{
//       getData(4)
//     })
//   });
// });

// Promises

// let promise =new Promise((resolve,reject)=>{
//   console.log("i am a promise")
// })

// Promise has 3 steges they are 
/*
  1.pending 
  2.fulfiled (resolved)
  3.rejected 
*/
const getPromise =()=>{
  return new Promise((resolve,reject)=>{
  console.log("i am a promise")
  // resolve("success");
  reject("some error ocured");
})}


let promise=getPromise();
promise.then((res)=>{
  console.log("promise fulfilled: ",res)
});

promise.catch((err)=>{
  console.log("some error occured: ",err)
})

