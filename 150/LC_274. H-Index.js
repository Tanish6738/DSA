var hIndex = function (citations) {
  let x = 0;
    citations.sort((a, b) => {
    return  b-a;
  });
  // [0,1,3,5,6]

  for(let i = 0 ; i < citations.length;i++){
    if (citations[i] >= i + 1 ){
        x = i + 1
    }else{
        break;
    }
  }
  return x;      
};

let citations = [3, 0, 6, 1, 5];
console.log(hIndex(citations));

