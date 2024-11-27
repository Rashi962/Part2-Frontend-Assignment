function Bird(name) {
    this.name = name;
    this.numLegs = 2;
}
  
let canary = new Bird("Tweety");
let ownProperties = [];

for (let property in canary) {
    if (canary.hasOwnProperty(property)) {
      ownProperties.push(property);
    }
}
  
console.log(ownProperties);