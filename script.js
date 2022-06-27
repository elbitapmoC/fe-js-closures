// VAR - i is global scope
// for (var i = 0; i < 3; i++) {
//   const log = () => {
//     debugger;
//     console.log(i); // 3,3,3
//   }
//   setTimeout(log, 100)
// }

// LET - i is block scope
for (let i = 0; i < 3; i++) {
  const log = () => {
    // debugger;
    console.log(i); // 0,1,2
  }
  setTimeout(log, 1000)// After 1sec, shows all i's.
}