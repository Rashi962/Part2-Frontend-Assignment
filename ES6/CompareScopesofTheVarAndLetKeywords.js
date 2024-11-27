function checkScope() {
    let i = 'function scope';
    if (true) {
      let i = 'block scope';  // Declare a separate variable inside the if block
      console.log(i);  // This will log 'block scope'
    }
    return i;  // This will return 'function scope'
  }
  
  console.log(checkScope());  // Output should be 'function scope'
  