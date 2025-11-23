function Print(n){
    if (n == 1 ) {
        console.log(n);
        return;
    }

    Print(n - 1);
    console.log(n);

}

let  n = 10;
Print(n);