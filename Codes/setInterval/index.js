document.write("Hello")

// const sum = (a, b, c) => {
//   console.log("Yes I am running " + (a + b + c))
//   a + b
// }

// let a= setTimeout(sum, 1000, 1, 2, 7)
// setInterval(function() {
//   alert("setinterval")
// }, 3000)
// console.log(a)
// if (a==5){clearInterval(a)
// }
// // let a = setTimeout(function() {
// //   alert("I am inside of settimeout")
// // }, 5000)

// // let b = prompt("Do you want to run the settimout?")
// // if ("n" == b) {
// //   clearTimeout(a)
// // }
// // console.log(a)
// program to stop the setInterval() method after five times

let count = 0;

// function creation
let interval = setInterval(function(){

    // increasing the count by 1
    count += 1;

    // when count equals to 5, stop the function
    if(count === 5){
        clearInterval(interval);
    }

    // display the current time
    let dateTime= new Date();
    let time = dateTime.toLocaleTimeString();
    alert(time+"     "+count)
    // console.log(time);

}, 2000);