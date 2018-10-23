// Normal Function
console.log("A normal function and an async function");
 function add(x,y){
    return x + y;
  }
  // Async Function
  async function add(x,y){
    return x + y;
  }

  console.log(add(4,5));

  /*aysnc function asyncAwait() {
      console.log("knock knock");
      await delay(1000);
      console.log("qwho's there");
      await delay(1000);
      console.log("async/await");
  }
  */

 console.log("Function double after 2 seconds");
 function doubleAfter2Seconds(x) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(x * 2);
      }, 2000);
    });
  }

  //using normal .then calling promise
  console.log(doubleAfter2Seconds(10).then(function(data) {
      console.log(data);
  }));

  //using arrow function calling promise
  doubleAfter2Seconds(10).then((data) => {
    console.log(data);
});

console.log("*************************");

let sum =   doubleAfter2Seconds(10)
          + doubleAfter2Seconds(20)
          + doubleAfter2Seconds(30);
console.log(sum);
console.log("---------------------------");
console.log("Chaining / Adding promises");
function addPromise(x){
    return new Promise(resolve => {
      doubleAfter2Seconds(10).then((a) => {
        doubleAfter2Seconds(20).then((b) => {
          doubleAfter2Seconds(30).then((c) => {
            resolve(x + a + b + c);
          })
        })
      })
    });
  }

  addPromise(10).then( (sum) =>{
      console.log(sum);
  });

  console.log("************************");
  console.log("Using Aysnc");

  async function addAsync(x) {
    const a = await doubleAfter2Seconds(10);
    const b = await doubleAfter2Seconds(20);
    const c = await doubleAfter2Seconds(30);
    return x + a + b + c;
  }
  
  
  addAsync(10).then((sum) => {
    console.log(sum);
  });