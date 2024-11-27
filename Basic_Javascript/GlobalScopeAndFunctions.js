// Declare the global variable with let and initialize it to 10
let myGlobal = 10;

function fun1() {
  // Assign 5 to oopsGlobal, without declaring it with let, const, or var
  oopsGlobal = 5;
}

// The fun2 function will check if the global variables are set correctly
function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}
