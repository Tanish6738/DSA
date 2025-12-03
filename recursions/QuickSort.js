function findPivot(arr, s , l){
    let pivot = arr[l];

    let i = s - 1  ;
    for(let j = s ; j< l; j++){
        if (arr[j] < pivot){
            i++;
            [arr[i] , arr[j]] = [arr[j], arr[i]];
        }
    }

    i++;
    [arr[l] , arr[i]] = [arr[i], arr[l]];


    return i ;
}

function QuickSort(arr, s , l){
    if (s >= l) return;
    let pivot = findPivot(arr,s ,l)
    QuickSort(arr, s ,pivot - 1);
    QuickSort(arr, pivot + 1 , l);
}

let arr = [10,2,5,8,6];
QuickSort(arr,0 ,arr.length- 1);
console.log(arr);