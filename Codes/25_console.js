console.log(console)
console.log('subhadip')
console.error("This is an Error")


let obj={
    subhadip:20,
    sunirnoy:50,
    ocean:40,
    vai:50
}
console.table(obj)

console.log("log")
console.info("info")
console.warn("warn")
console.error("err")
console.assert("err" != false)
console.assert("err" == false)

console.time("forLoop")

for (let i = 0; i < 500; i++) {
  console.log(233)
}

console.timeEnd("forLoop")

console.time("whileLoop")

let i = 0;
while (i < 500) {
  console.log(233)
  i++;
}

console.timeEnd("whileLoop")