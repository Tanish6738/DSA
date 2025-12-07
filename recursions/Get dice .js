function GetDice(n){
    return Solve(n,[],[]);
}


function Solve(n,p,arr){
    if (n == 0 ) {
        if (!arr.includes(p)){
            arr.push([...p]);
            return;
        }
    }

    for(let i = 1 ; i <=n ; i++){
        p.push(i)
        Solve(n-i,p , arr);
        p.pop();
    }

    return arr;
}

console.log(Solve(4,[],[]));