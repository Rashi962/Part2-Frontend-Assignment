// Setup
function phoneticLookup(val) {
    var result = "";
  
    var lookup = {
      "alpha": "Adams",
      "bravo": "Boston",
      "charlie": "Chicago",
      "delta": "Denver",
      "echo": "Easy",
      "foxtrot": "Frank"
    };
    // Only change code below this line
  
    result = lookup[val];
  
    // Only change code above this line
    return result;
  }
  
  // Change this value to test
  phoneticLookup("charlie");