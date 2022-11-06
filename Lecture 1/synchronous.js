function myApp() {
    var age = 30;
    if (age > 18) {
        console.log("Let's go drinking");
    } else {
        console.log("Go home, you are undergrad");
    }
}

myApp();
setTimeout(() => {
    console.log("Test statement 1");
}, 2000);
console.log("Test statement 2");