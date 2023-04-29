/////////////////////JavaScript async / await///////////////////////

<p>Wait 3 seconds (3000 milliseconds) for this page to change.</p>

<h1 id="demo"></h1>

<script>
async function myDisplay() {
  let myPromise = new Promise(function(resolve) {
    setTimeout(function() {resolve("I love You !!");}, 3000);
  });
  document.getElementById("demo").innerHTML = await myPromise;
}

myDisplay();

 ////////////////Call back///////////////////////
//ek function kay andar ek or function as aparameter pass akrtay hen
function sayHello() {
console.log("hello")}

function add(num1, num2, myCallback) {
  console.log( num1 + num2);
  myCallback();
}

add(5, 5, sayHello);
</script>

///////////////////////promises//////////////////////////////


 const myPromise = new Promise((resolve, reject) => {
  // Perform some asynchronous operation, such as fetching data from a server
  // If the operation is successful, call resolve with the result
  // If the operation fails, call reject with an error
});

///Once a promise is created, you can use the .then() method to attach a callback
 function that will be called when the promise is fulfilled, and the .catch() method 
to attach a callback function that will be called when the promise is rejected. For example//

myPromise
  .then(result => {
    // Do something with the result
  })
  .catch(error => {
    // Handle the error
  });
