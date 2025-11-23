let Print = (n : number) : void =>{
    if (n == 1 ) {
        console.log(1);
        return;
    }

    console.log(n);
    Print(n - 1);
}

console.log(Print(5));