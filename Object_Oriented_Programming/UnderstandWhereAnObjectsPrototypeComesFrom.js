function Dog(name) {
    this.name = name;
  }
  
  let briard = new Dog("Ares");
  
  console.log(Dog.prototype.isPrototypeOf(briard));
  
  
