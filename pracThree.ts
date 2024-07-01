// const test1 : string = "첫 번째 시작 문구"
// const test2 : string = "두 번째 시작 문구"
// const test3 : string = "세 번째 시작 문구"
// const test4 : string = "네 번째 시작 문구"

// const promise = new Promise((resolve, reject) : void => {
//   setTimeout(() => {
//     const randomNum : number = Math.random();
//     if(randomNum > 0.5){
//       resolve(randomNum)
//     } else {
//       reject("Random number is too low");
//     }
//   },1500)
// })


function getRandomNum(){
  return new Promise((resolve, reject)=>{
    setTimeout(() => {
      const randomNum : number = Math.random();
      if(randomNum > 0.5) {
        resolve(randomNum);
      } else {
        reject(new Error("tooooooooo Looowwwwwwwwwwww"))
      }
    },1000)
  });
}

getRandomNum()
.then((result)=>{
  console.log(`got it! : ${result}`)
})
.catch((error) => {
  console.error(`something is Wrong :( ${error}`)
})