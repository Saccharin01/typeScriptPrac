class person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  greeting(){
    console.log(`Hello, my name is ${this.name}, i'm ${this.age} years old.`)
  }
}

const alice = new person("alice", 30)
console.log(alice)
alice.greeting()

class square {
  constructor(public horizontal : number, public vertical : number){
    this.horizontal = horizontal;
    this.vertical = vertical;
  }
  calculateSize(){
  let size = this.horizontal * this.vertical    
    return size
  }
  report(){
    console.log(`this square size is ${this.calculateSize()}`)
  }
}

let fourByFour = new square(4,4)
console.log(fourByFour)
fourByFour.report()
console.log(fourByFour.calculateSize())

class triangle {
  constructor(public angleOne : number, public angleTwo : number, public angleThree : number){
    this.angleOne = angleOne
    this.angleTwo = angleTwo
    this.angleThree = angleThree
  }
  isTriange() : string {
    if(this.angleOne + this.angleTwo + this.angleThree === 180){
      return  "this is triangle :)"
    } else {
      return "this is not triangle :("
    } 
  }

    // if(this.angleOne + this.angleTwo + this.angleThree > 180 || this.angleOne + this.angleTwo + this.angleThree <180){
    //   return `it is not Tringle :(`
    // } else {
    //   return `it is Triangle! :)`
    // }
  // }
}


let yesTriangle = new triangle(60,40,80)
let noTriangle = new triangle(90,60,60)

console.log(yesTriangle)
console.log(noTriangle)
console.log(yesTriangle.isTriange())
console.log(noTriangle.isTriange())
