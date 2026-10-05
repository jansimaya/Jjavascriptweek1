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
 
