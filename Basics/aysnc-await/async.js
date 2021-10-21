
// Async/Await is a much cleaner syntax for working with promises than using .then(). 
// Let's take a look at how to convert an asynchronous function from using .then() to using async/await and
// learn a few tips along the way.

const url = ('https://jsonplaceholder.typicode.com/todos/1');

fetch(url)
    .then( (res) => {
        return res.json();
    })
    .then((data) =>{
        console.log(data);
    })
    .catch((err) => {
        console.error(error);
    })

//exercise 2
const loadData = async() => {
    try{
    const url = "https://jsonplaceholder.typicode.com/todos/1";
    const res = await fetch(url);
    //console.log(res.ok);
    const data = await res.json();
    //console.log(res.json());
    //console.log('Data = ' + JSON.stringify(data));
      return data
    } catch(err) {
      console.error(error);
    }
  }
  
  //loadData();
  loadData().then((data) => {
    console.log(data)
  })

  // EIFEE -> only older node versions
  (async () => {
    const data = loadData();
    console.log(data);
  })();

// exercise 3 - promise.all

const loadData = async() => {
    try{
    const url1 = "https://jsonplaceholder.typicode.com/todos/1";
    const url2 = "https://jsonplaceholder.typicode.com/todos/2";
    const url3 = "https://jsonplaceholder.typicode.com/todos/3";
    
    const res1 = await fetch(url1);
    const data1 = await res1.json();
    const res2 = await fetch(url2);
    const data2 = await res2.json();
    const res3 = await fetch(url3);
    const data3 = await res3.json();

      return [data1, data2, data3]
    } catch(err) {
      console.error(error);
    }
  }
  
  //loadData();
  loadData().then((data) => {
    console.log(data)
  })

  const loadData = async() => {
    try{
    const url1 = "https://jsonplaceholder.typicode.com/todos/1";
    const url2 = "https://jsonplaceholder.typicode.com/todos/2";
    const url3 = "https://jsonplaceholder.typicode.com/todos/3";
    
      //Promise.all -> runs parallel at same time
    const results = await Promise.all ([
      fetch(url1),
      fetch(url2),
      fetch(url3)
    ]);
      
      //const dataPromise = results.map(result => result.json())
      //const finalData = await Promise.all(dataPromise)
      const finalData = await Promise.all(results.map(result => result.json()))
      
      return finalData;
    } catch(err) {
      console.error(error);
    }
  }
  
  //loadData();
  loadData().then((data) => {
    console.log(data)
  })
  
  /* (async () => {
    const data = loadData();
    console.log(data);
  })();
  */
