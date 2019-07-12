
let letters = [];

let word = "racecar";

let rword = "";

// put letters of word in a stack
for (let i = 0; i < word.length; i++){
    letters.push(word[i]);
}

// pop off the stack in reverse order
for (let i = 0; i < word.length; i++){
    rword += letters.pop();
} 

if (rword === word){
    console.log(word + " is a palindrome.");
} else {
    console.log(word + " is not a palindrome.");
}

// create a stack
