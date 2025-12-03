function MergeSort(arr,s,l){
    if (s >= l - 1 ) {
        return;
    }
    let mid = Math.floor((s + l) / 2);

    MergeSort(arr, s , mid);
    MergeSort(arr, mid , l);

    Merge(arr,s , mid ,l)
}

function Merge(arr,s,mid ,l){
    let temp = new Array( l - s);
    let i = s , j = mid , k =0;
    while( i < mid && j < l){
        if (arr[i] <=arr[j]) temp[k++] = arr[i++]
        else temp[k++] = arr[j++]
    }

    while(i < mid ) temp[k++] = arr[i++];
    while(j < l ) temp[k++] = arr[j++];

    for(let d = 0 ; d < temp.length ;d++){
        arr[s + d] = temp[d]
    }

}

let arr= [15,1,4,25];
MergeSort(arr,0,arr.length - 1)
console.log(arr);