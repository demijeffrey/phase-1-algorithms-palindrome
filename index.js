function isPalindrome(word) {
  // Write your algorithm here
  if (word === word.split('').reverse().join('')) {
    return true
  } else {
    return false
  }
}

/* 
  Add your pseudocode here

  Take a string as a parameter
  if string === string.split().reverse().join()
    return true
  else
    return false
*/

/*
  Add written explanation of your solution here

  The isPalindrome() function is taking in any string as a parameter, using the
    .split() method to separate each letter of the string into their own
    individual strings, then uses the .reverse() method to reverse the order of
    those individual strings (first letter is now the last letter and vice versa),
    and then finally uses the .join() method to rejoin the individual strings back
    to one whole string in its new reversed order. If that new reversed order
    matches the original string set in the parameter, the function will return
    true, if it does NOT match, the function will return false.

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here

  console.log(isPalindrome('civic'))
  console.log(isPalindrome('elephant'))

  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
