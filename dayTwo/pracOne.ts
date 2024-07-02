interface userData {
  userName : string;
  email : string;
}
function fetchUserData() : Promise<userData> {
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
      const userData: userData = {
        userName : "alice",
        email : "asdf@gmail.com"
      };
      resolve(userData);
    },1200)
  })
};

function updateUserData(email:string) : Promise<userData>{
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
    
      const updateUserData: userData = {
        userName : "alice",
        email : email
      };
      resolve(updateUserData)
    },500)
  })
}

fetchUserData()
.then((userData)=>{
  console.log(`fetch userData : ${JSON.stringify(userData)}`)
  return updateUserData("qwer@naver.com")
})
.then((updateUserData)=>{
  console.log(`update compelete! : ${JSON.stringify(updateUserData)}`)
})
.catch((err)=>{
  console.error(`something is Wrong! : ${err}`)
})