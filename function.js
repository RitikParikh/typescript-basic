"use strict";
exports.__esModule = true;
function addTwo(num) {
    return num + 2;
}
function addTwoString(num) {
    return num + 2;
}
function getUpper(val) {
    return val.toUpperCase();
}
function signUpYUser(name, email, isPaid) {
}
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
function getValue(myVal) {
    if (myVal > 5)
        return true;
    return "200 OK";
}
var getHello = function (s) {
    return "";
};
var heros = ["thor", "spiderman", "ironman"];
// const heros = [1,2,3];
heros.map(function (hero) { return "hero is ".concat(hero); });
addTwo(5);
getUpper("Ritik");
signUpYUser("Ritik", "ritikparikh98@gmail.com", true);
loginUser("Ritik", "ritikparikh98@gmail.com");
addTwoString(5);
function consoleError(errmsg) {
    console.log(errmsg);
}
function handleError(errmsg) {
    throw new Error(errmsg);
}
