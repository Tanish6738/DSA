function Skip(s, char){

    let ans = "", i = 0;


    function solve(s , char , ans , i){
        if ( i == s.length ) return ans;

        if (s.charAt(i) != char){
            ans = ans + s.charAt(i);
        }

        return solve(s ,char,ans,i+1)
    }
    return solve(s,char,ans,i);    
}

function Skip2 (s , char, p){
    if (s.length == 0 ) return p;

    let c = s.charAt(0);
    if (c == char) {
        return Skip2(s.substring(1) , char, p );
    }else {
        return Skip2(s.substring(1) , char, p + c);
    }
}
// let s = "baccab",char = "a";
// console.log(Skip2(s,char, "")); 

function SkipString (s , c , p){
    if (s.length == 0 ) return p;
    if (s.length == 0 ) return p;

    if (s.startsWith(c)){
        return SkipString(s.substring(c.length), c, p);
    }else{
        return SkipString(s.substring(1), c, p + s.charAt(0));
    }
}
// let s = "HelloWorldAppleBoy" , c = "Apple";
// console.log(SkipString(s ,c,"" ));

