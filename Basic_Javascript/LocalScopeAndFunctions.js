function myLocalScope() {
    'use strict';
  
    var myVar = "Hello";
  
    console.log(myVar);
  }
  myLocalScope();
  
  // Run and check the console
  // myVar is not defined outside of myLocalScope