interface item{
  name : string
  stock : number
}
const items: item[] = [
  { name: "콜라", stock: 5 },
  { name: "사이다", stock: 0 },
  { name: "물", stock: 10 },
  { name: "쥬스", stock: 0 },
];

const availableItem = items.filter((elemenet)=>{return elemenet.stock > 0;})
console.log(availableItem)