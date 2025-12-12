function Phone (digits){
    let Map = {
        "2" : ["a","b","c"],
        "3" : ["d","e","f"],
        "4" : ["g","h","i"],
        "5" : ["j","k","l"],
        "6" : ["m","n","o"],
        "7" : ["p","q","r","s"],
        "8" : ["t","u","v"],
        "9" : ["w","x","y","z"],
    }
    let ans = [];
    Solve(digits,"",Map,ans);

    return ans;
}


function Solve(digits,p , Map, ans){
    if (digits == ""){
        ans.push(p);
        return;
    }

    let char = digits[0];
    let arr = Map[char];

    for(let i = 0 ; i < arr.length ; i++){
        Solve(digits.slice(1),p + arr[i], Map,ans);
    }
}

console.log(Phone("23"));