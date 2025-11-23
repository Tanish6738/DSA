let doSomething = (arr,index,min,max) =>{
    if(arr.length == index) return [min ,  max];

    if (arr[index] > max) max = arr[index];
    if(arr[index] < min) min = arr[index];

    return doSomething(arr, index + 1 , min,max);

};

let arr = [1, 4, 3, -5, -4, 8, 6];
console.log(doSomething(arr,0,0,0));