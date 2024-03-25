/*
Given two words, 
how many letters do you have to 
remove from them to make them anagrams?

Example:
  First word : codewars => cear (4 letters removed)
  Second word : hackerrank => cera (6 letters removed)
  Result : 10

Hints:
  Do not worry about case. All inputs will be lowercase.
  A word is an anagram of another word if they have 
  the same letters (usually in a different order).
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

function anagramDifference(w1,w2){
  w1 = w1.split('');
  w2 = w2.split('');

   for(let i = 0; i < w1.length; i++) {
     for (let j = 0; j<w2.length; j++) {
       if (w1[i] === w2[j]) {
         w1[i] = ' ';
         w2[j] = ' ';
         break;
       }
     }
   }
   
   let counter = 0;
   
   for(let i = 0; i < w1.length; i++) {
   if (w1[i] == ' ') counter++;
   }
   
   return w1.length - counter + w2.length - counter;
}