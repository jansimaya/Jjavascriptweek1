browsername='edge';
function launchBrowser(browserName) {
    if (browserName === "chrome") {
        console.log(`The browser is launched in ${browserName}`);
    } else {
        console.log(`The browser is launched in ${browserName}`);
    }
}
launchBrowser(browsername);


testType = "smoke";
function runTests(testType) {
    switch (testType) {
        case "smoke":
            console.log("Running smoke tests");
            break;
        case "sanity":
            console.log("Running sanity tests");
            break;
        case "regression":
            console.log("Running regression tests");
            break;
        default:
            console.log("Running smoke tests");
    }
}


runTests("smoke");

let number=10; 
function isOddorEven(number){
    if(number%2==0){
        return "even";
    }else{
        console.log("the number is odd:",number);
        return "odd";
    }

}
console.log(isOddorEven(number));
