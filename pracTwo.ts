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