function removeFirstTwo(list) {
    // Destructure the first two elements and collect the rest in a new array
    const [, , ...newList] = list;
    return newList;
  }
  
  // Testing the function
  console.log(removeFirstTwo([1, 2, 3, 4, 5]));  // Should return [3, 4, 5]
  