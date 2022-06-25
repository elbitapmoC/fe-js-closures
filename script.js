 function makeFun(){
  let privateNum = 0;
  return {
    logNum: () => console.log(privateNum),
    increment: () => {
      privateIncrement();
      console.log('Incremented!');
    },
  }
 }
