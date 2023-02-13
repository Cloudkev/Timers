  function countDown(num){
    let timer = setInterval(function(){
      if(num <= 0){
        clearInterval(timer);
        console.log('DONE!');
      }
      else {
        console.log(num);
        num--;
      }
  
    },1000)
  }

  

// function randomGame(){
//     let num;
//     let times = 0;
//     let timer = setInterval(function(){
//       num = Math.random();
//       console.log(num);
//       times++
//       if(num > .75) {
//         clearInterval(timer);
//         console.log("It took " + times + " try/tries.");
//       }
//     },1000)
//   }