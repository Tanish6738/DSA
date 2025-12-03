function Bubble(arr, i , lastIndex ){
    
    if ( lastIndex <= 0) return arr;

    if (arr[i] > arr[i + 1 ]){
        [arr[i] , arr[i + 1 ]] = [arr[i + 1] , arr[ i ]]
    }
    
    if (i  == lastIndex) {
         return Bubble(arr, 0 , lastIndex - 1 );
    }
   return Bubble(arr, i + 1 , lastIndex);

}


function Selection(arr, i , lastIndex ,max){
    if (lastIndex <= 0 ) return arr;

    if (arr[i] > arr[max] ) max = i;

    if (i == lastIndex){
        [arr[lastIndex],arr[max]] = [arr[max] ,arr[lastIndex]]
        return Selection(arr, 0, lastIndex - 1, 0);
    }

    return Selection(arr, i + 1 , lastIndex , max);
}
let arr= [15,1,4,25];
// console.log(Bubble(arr,0 ,arr.length - 1 ));
// console.log(Selection(arr, 1 , arr.length - 1 , 0));


function MergeSort(arr, s, e){
    if ( s>= e - 1) return ;
    let mid = Math.floor(( s +  e ) / 2);

    MergeSort(arr,s, mid);
    MergeSort(arr,mid , e);

    Merge(arr,s , mid, e);
}   

function Merge(arr, s,mid ,e){
    let temp = new Array( e -s  );
    let i = s,j=mid, k=0
    while(i < mid && j < e){
        if (arr[i] <= arr[j]){
            temp[k++] = arr[i++];
        }else{
            temp[k++] = arr[j++];
        }
    }

    while(i < mid) temp[k++] = arr[i++];
    while(j < e) temp[k++] = arr[j++];

    for(let l = 0 ; l < temp.length ;l++){
        arr[s + l] = temp[l];
    }
}

MergeSort(arr,0,arr.length);

console.log(arr);


