/**
 * @param {string} v1
 * @param {string} v2
 * @return {number}
 */
var compareVersion = function(v1, v2) {
    v1 = v1.split(".");
    v2 = v2.split(".");

    if (v2.length !== v1.length) {
        if (v2.length > v1.length){
            while(v1.length != v2.length){
                v1.push("0");
            }
        }
        if (v1.length > v2.length){
            while(v1.length != v2.length){
                v2.push("0");
            }
        }
    }
    
    for(let i = 0 ; i <v1.length ;i++){
        if (Number(v1[i]) > Number(v2[i])){
            return 1;
        }
        else if (Number(v1[i]) < Number(v2[i])){
            return -1;
        }else{
            continue;
        }
    }

    return 0
};

let v1 = "1.0.1", v2 = "1";

console.log(compareVersion(v1,v2));