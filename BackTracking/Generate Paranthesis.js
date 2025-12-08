function genPara(p,i, j,arr){
    if ( i == 0 && j == 0 ){
        arr.push(p);
        return;
    }
    if ( i < j ){
        if (i !== 0 ) genPara(p + "(", i - 1 ,j,arr);
        genPara(p + ")", i  ,j - 1 ,arr);
    }else{
        genPara(p + "(",i - 1 , j , arr);
    }
}

let arr = [];
genPara("",8,8,arr);
console.log(arr);