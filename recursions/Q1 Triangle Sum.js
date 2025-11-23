let doSomething = (arr) =>{
    if (arr.length == 1 ) return arr;
    let temp = new Array(arr.length - 1).fill(0);
    for(let i = 0 ; i < arr.length - 1; i++){
        temp[i] =  arr[i] + arr[i+1];
    }

    return doSomething(temp);
}

let arr = [1,2,3,4,5];
console.log(doSomething(arr));