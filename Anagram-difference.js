/*
Given two words, 
how many letters do you have to remove from them to make them anagrams?

Example:
  First word : c od e w ar s (4 letters removed)
  Second word : ha c k er r a nk (6 letters removed)
  Result : 10

Hints:
  A word is an anagram of another word if they have the same letters 
  (usually in a different order).
  Do not worry about case. All inputs will be lowercase.
*/


// Solution

function anagramDifference(w1,w2){
  const stack = {};
  
  for (let c1 of w1) {
    stack[c1] > 0 ? stack[c1]++ : stack[c1] = 1;
  }
  
  let counter = 0;
  
  for (let c2 of w2) {
    stack[c2] > 0 ? stack[c2]-- : counter++;
  }
  
  const result = counter + Object.values(stack).reduce((sum, curr) => sum + curr, 0);
  
  return result;
}

// or