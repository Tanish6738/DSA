/**
 * Router class implementation
 */
class Router {
  /**
   * @param {number} memoryLimit
   */
  constructor(memoryLimit) {
    this.memoryLimit = memoryLimit;
    this.arr = [];
  }

  /**
   * @param {number} source
   * @param {number} destination
   * @param {number} timestamp
   * @return {boolean}
   */
  addPacket(source, destination, timestamp) {
    let element = [source, destination, timestamp];
    if (this.memoryLimit > this.arr.length) {
      if (this.arr.includes(element)) return false;
      else {
        this.arr.push(element);
        return true;
      }
    } else {
      if (this.arr.includes(element)) return false;
      else {
        this.arr.shift();
        this.arr.push(element);
        return true;
      }
    }
  }

  /**
   * @return {number[]}
   */
  forwardPacket() {
    return this.arr;
}

  /**
   * @param {number} destination
   * @param {number} startTime
   * @param {number} endTime
   * @return {number}
   */
  getCount(destination, startTime, endTime) {
    
  }
}

/**
 * Your Router object will be instantiated and called as such:
 * var obj = new Router(memoryLimit)
 * var param_1 = obj.addPacket(source,destination,timestamp)
 * var param_2 = obj.forwardPacket()
 * var param_3 = obj.getCount(destination,startTime,endTime)
 */
