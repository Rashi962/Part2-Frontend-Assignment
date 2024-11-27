function Dog(name) {
    this.name = name;
  }
  
  let dog = new Dog("Snoopy");
  
  Dog.prototype.isPrototypeOf(dog);  // yields true
  
  console.log(dog.isPrototypeOf(Dog.prototype));