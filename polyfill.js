const nums = [1,2,3,4]
const resultArr = nums.map((i) => i)

Array.prototype.myMap = function(cb) {
    let temp = [];
    for(let i=0;i<this.length;i++) {
        temp.push(cb(this[i],i,this))
    }
    return temp
}

Array.prototype.myFilter = function(cb) {
    let temp = [];
    for(let i=0;i<this.length;i++) {
        if(cb(this[i],i,this))
        temp.push(this[i])
    }
    return temp
}

Array.prototype.myReduce = function(callback, initialValue) {
    let acc = initialValue;
    for(i=0;i<this.length;i++) {
        if(acc) {
            acc = callback(acc, this[i], i, this)
        } else {
            acc = this[i]
        }
    }
    return acc;
}

// const result = nums.myMap((a) => a*10);
console.log("result is", nums.myReduce((a) => a+b, 10));
// console.log("result is", nums.myFilter((i, index, arr) => i >= 2));
// const reduceResult = nums.reduce((a,b) => a+b);
// console.log("reduceResult", reduceResult);
