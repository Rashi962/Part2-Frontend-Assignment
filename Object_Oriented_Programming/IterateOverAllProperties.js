function Dog(name) {
    this.name = name;
  }
  
  Dog.prototype.numLegs = 4;
  
  let beagle3 = new Dog("Snoopy");
  
  let ownProps = [];
  let prototypeProps = [];
  
  for (let prop in beagle) {
    if (beagle3.hasOwnProperty(prop)) {
      ownProps.push(prop);
    } else {
      prototypeProps.push(prop);
    }  
  }
  
  console.log(ownProps);
  console.log(prototypeProps);