function Dog(name) {
    this.name = name;
  }
  
  function joinDogFraternity(candidate) {
    if (candidate.constructor === Dog) {
      return true;
    } 

    return false; 
  }