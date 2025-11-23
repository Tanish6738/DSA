let StrL = (s, count)=>{
    if (s == "") return count;
    s = s.slice(1,)
    return StrL(s ,count + 1 )

};

let str = "GEEKSFORGEEKS";
console.log(StrL(str, 0));
