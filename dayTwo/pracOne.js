function fetchUserData() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            var userData = {
                userName: "alice",
                email: "asdf@gmail.com"
            };
            resolve(userData);
        }, 1200);
    });
}
;
function updateUserData(email) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            var updateUserData = {
                userName: "alice",
                email: email
            };
            resolve(updateUserData);
        }, 500);
    });
}
fetchUserData()
    .then(function (userData) {
    console.log("fetch userData : ".concat(userData));
    return updateUserData("qwer@naver.com");
})
    .then(function (updateUserData) {
    console.log("update compelete! : ".concat(updateUserData));
})
    .catch(function (err) {
    console.error("something is Wrong! : ".concat(err));
});
