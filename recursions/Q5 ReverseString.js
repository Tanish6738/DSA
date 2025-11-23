let Rev = (s)=>{
    let i = 0;
    let j = s.length - 1;
     solve(s,i,j)

};

let solve = (s , i , j)=>{
    if ( i >= j ) return s;

    let temp = s[i];
    s[i] = s[j];
    s[j] = temp;

    return solve(s,i+1,j-1)
}

let s = ["h","e","l","l","o"];
console.log(Rev(s));