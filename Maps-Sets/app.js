// ## **Quick Question #1**

//returns [1, 2, 3, 4]

//## **Quick Question #2**

//returns "ref"

//## **Quick Question #2**
//0: {Array(3) => true}
// 1: {Array(3) => false}

const hasDuplicate = (arr) => new Set(arr).size !== arr.length 


function isVowel(char){
    return 'aeiou'.includes(char);
}
const vowelCount = (str) => {
    let vowelMap = new Map();
    for(let char of str){
        let lowerCasedChar = char.toLowerCase();
        if(isVowel(lowerCasedChar)){
            if(vowelMap.has(lowerCasedChar)){
                vowelMap.set(lowerCasedChar, vowelMap.get(lowerCasedChar) + 1);
            } else  {
                vowelMap.set(lowerCasedChar, 1);
            }
            
        }

    }
}