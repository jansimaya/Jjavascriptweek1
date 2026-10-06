/* Example 1 */
let str="Hello world";
let words=str.split(" ");
let lastword =words[words.length-1];
console.log(lastword.length);


/* Example 2 */


function trim(str2){
  let s=str2.trim();
  console.log(s);
  let swords=s.split(" ");
  let lastWord = swords[swords.length - 1];
  let length=lastword.length;
  return length;
}
  console.log(trim("   fly me   to   the moon  "));


  /* Example 3 */
 
 function isAnagram(string1, string2) {
 string1=string1.replace(" ","").toLowerCase();
 string2=string2.replace(" ","").toLowerCase();

 let sortedstring1=string1.split("").sort().join("");
    let sortedstring2=string2.split("").sort().join("");
return sortedstring1 === sortedstring2;
 }
    console.log(isAnagram("listen", "silent"));
    console.log(isAnagram("hello", "world"));
 