class TimeMap {
    constructor() {
        this.store = new Map();
    }

    /**
     * @param {string} key 
     * @param {string} value 
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
        if (!this.store.has(key)) {
            this.store.set(key, []);
        }
        this.store.get(key).push([timestamp, value]);
    }

    /**
     * @param {string} key 
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        if (!this.store.has(key)) return "";
        const arr = this.store.get(key);
        let left = 0, right = arr.length - 1, res = "";
        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            if (arr[mid][0] <= timestamp) {
                res = arr[mid][1];
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return res;
    }
}

/**
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */