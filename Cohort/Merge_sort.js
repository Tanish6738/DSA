let divide = (arr , f , l)=>{

    if (f >= l) return ;
    let mid = Math.floor((f + l) / 2);
    divide(arr,f,mid);
    divide(arr,mid + 1 , l);
    conquer(arr, f, mid, l);
};
let conquer = (arr , f , mid , l)=>{

    let temp = new Array(l -f + 1);
    let i = f , j = mid+1; k= 0;

    while( i <= mid && j <= l){
        if (arr[i] > arr[j]) temp[k++] = arr[j++];
        else temp[k++] = arr[i++];
    }

    while(i <=mid )  temp[k++] = arr[i++];
while(j <=l ) temp[k++] = arr[j++];

    i = f;
    k = 0;

    while( k < temp.length){
        arr[i++] = temp[k++]
    }

    return arr;
};

let arr = [1,52,57,48,41,84,95];
divide(arr, 0, arr.length - 1)
console.log(arr);


// let conquer =(arr , f , mid , l )=>{
//     let temp = new Array(l - f + 1 ).fill(0);
//     let i = f , j = mid+ 1 , k = 0 ;
//     while( i <=mid && j <=l ){
//         if (arr[i] < arr[j]) temp[k++] = arr[i++]
//         else temp[k++] = arr[j++]
//     }

//     while(i <= mid ) temp[k++] = arr[i++]
//     while(j <= l ) temp[k++] = arr[j++];

//     i = f , k = 0;
//     while( k < temp.length){
//         arr[i++] = temp[k++];
//     }

//     return arr;
// }


// let divide = (arr, f , l )=>{
//     if (f >= l) return;
//     let mid = Math.floor((f + l) / 2);
//     divide(arr,f , mid )
//     divide(arr,mid+1 , l );
//     conquer(arr, f,mid, l);
// }

// let arr = [1,52,57,48,41,84,95];
// divide(arr, 0, arr.length - 1)
// console.log(arr);