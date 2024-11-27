const makeServerRequest = new Promise((resolve, reject) => {
    // responseFromServer is set to false to represent an unsuccessful response from a server
    let responseFromServer = false;
  
    if(responseFromServer) {
      resolve("We got the data");
    } else {
      reject("Data not received");
    }
  });
  
  // Log the result if the promise is resolved
  makeServerRequest.then(result => {
    console.log(result);
  })
  // Handle the rejection with catch
  .catch(error => {
    console.log(error);  // Log the error to the console
  });
  