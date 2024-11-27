const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["id-blacklist", "no-dup-keys"]
  };
  
  function makeList(arr) {
    "use strict";
    
    const resultDisplayArray = arr.map(val => `<li class="text-warning">${val}</li>`);
    
    return resultDisplayArray;
  }
  
  // Store the result in the required variable
  const failuresList = makeList(result.failure);
  
  // Log the result to check the output
  console.log(failuresList);
  