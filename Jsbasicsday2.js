const browserversion='chrome';

function getBrowserversion() {
    if (browserversion === 'chrome') {
let browserversion='edge';
console.log("Inside the block:", browserversion);

}
console.log("outside the block:", browserversion);
}

getBrowserversion();