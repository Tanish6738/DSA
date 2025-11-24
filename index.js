function linearSearch(arr, target, index,temp) {
    if (arr[index] == target && index < arr.length ){
      temp.push(index);
    }

    if ( index == arr.length) return temp;

    return linearSearch(arr ,target, index + 1 , temp);

}

console.log(linearSearch([1, 2, 45, 1, 8, 2, 15], 2, 0, []));
