function reverse(word){
  const createArray = word.split("")
  const reversedArray = createArray.reverse()
  const reversedWord = reversedArray.join("")
  return reversedWord;
}
function isPalindrome(word) {
  // Write your algorithm here
  // create a function that returns true if a word is a palendrome or returns false if not
  const reversedWord = reverse(word)
  if (word === reversedWord){
    return true;
  } else {
    return false ;
  }

}

/* 
  Add your pseudocode here
  reverse the input string 
  if the input string = reversed string then return true 
  if they are not the same
  returns false 
*/

/*
  Add written explanation of your solution here
  
*/


// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here

  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("abba"));
}

module.exports = isPalindrome;
