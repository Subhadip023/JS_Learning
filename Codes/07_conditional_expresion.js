// Coditional expression if else .. statment 
/*let a =process.argv[2];
a=Number.parseInt(a);
if(a<0){
    console.log("This is an Invalied age ");
}
else if (a<9){
    console.log("You are a kid you can't think of drive noy ")
}else if (a<18 && a >=9 ){
    console.log("You are a kid you can think of driveing after 18 ")
}

else{
    console.log("You can Drive Noy as you above 18");}
*/

// switch ---
// const expr = 'Mangoes';
// switch (expr) {
//   case 'Oranges':
//     console.log('Oranges are $0.59 a pound.');
//     break;
//   case 'Mangoes':
//   case 'Papayas':
//     console.log('Mangoes and papayas are $2.79 a pound.');
//     // Expected output: "Mangoes and papayas are $2.79 a pound."
//     break;
//   default:
//     console.log(`Sorry, we are out of ${expr}.`);
// }

// Ternary Operater 
let a =process.argv[2];
console.log("You can",(a>18? "Drive":"Not Drive"))
