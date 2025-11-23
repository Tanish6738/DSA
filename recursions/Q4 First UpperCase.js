let FirstUpperCase = (s, i , j)=>{
    if ( i > j ) return -1;
    let v1 = s.charCodeAt(i);
    let v2 = s.charCodeAt(j);
    if (v1>=67 && v1 <=90 ) return s.charAt(i);
    if (v2>=67 && v2 <=90 ) return s.charAt(j);

    return FirstUpperCase(s,i+1,j-1);
};

let s =  "geeksforgeeKs";
console.log(FirstUpperCase(s,0,s.length-1));