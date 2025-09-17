// /**
//  * @param {string} s
//  * @return {string}
//  */
// var reverseVowels = function (s) {
//   let arr = [];
//   let vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
//   let ans = "";
//   let map = new Map();
//   s= s.split("");

//   for (let i = 0; i < s.length; i++) {
//     let val = s[i];
//     if (vowels.includes(val)) {
//         arr.push(i);
//     }
//   }
  
//   for(let i = 0 ; i <= Math.floor(arr.length / 2) + 1; i++){
//     const a = arr[i];
//     const b = arr[arr.length - i - 1];
//     map.set(a, b);
//     map.set(b, a);
//   }

//   for(let i = 0 ; i <s.length ;i++){
//     if(map.has(i)){
//         ans = ans + s[map.get(i)];
//     }else {
//         ans = ans + s[i]
//     }
//   }


//   return ans;
// };

/**
 * @param {string} s
 * @return {string}
 */
var isVowel = (ch) => {
    switch (ch) {
        case 'A':
        case 'a':
        case 'E':
        case 'e':
        case 'I':
        case 'i':
        case 'O':
        case 'o':
        case 'U':
        case 'u':
        return true;
        default:
        return false;
    }
}
var reverseVowels = function(s) {
    let left = 0, right = s.length - 1;
    const arr = s.split('');
    while (left < right) {
        let leftChar = s.charAt(left), rightChar = s.charAt(right);
        if (isVowel(leftChar) && isVowel(rightChar)) {
            arr[left] = rightChar;
            arr[right] = leftChar;
            left++;
            right--;
        } else if (isVowel(leftChar)) {
            right --;
        } else if (isVowel(rightChar)) {
            left ++;
        } else {
            left++;
            right--;
        }
    }
    return arr.join('').toString();
};

let s = "A man, a plan, a canal: Panama";

console.log(reverseVowels(s));
