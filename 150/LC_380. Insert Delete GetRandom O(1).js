
var RandomizedSet = function() {
    this.set = [];
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    if (this.set.includes(val)){
        return false;
    }else {
        this.set.push(val);
        return true;
    }
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    if (this.set.includes(val)){
        this.set = this.set.filter((e) => e !== val);
        return true;
    }else{
        return false
    }
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    let n = Math.floor(Math.random() * this.set.length)
    return this.set[n];
};


var obj = new RandomizedSet()
var param_1 = obj.insert(2)
var param_5 = obj.insert(24)
var param_2 = obj.remove(2)
var param_3 = obj.getRandom()
