const string ='playwright';
let reversedString ="";

for (let i = string.length - 1; i >= 0; i--) {
    reversedString = reversedString + string[i];
}
console.log("The original string is:", string);
console.log("The reversed string is:", reversedString);
