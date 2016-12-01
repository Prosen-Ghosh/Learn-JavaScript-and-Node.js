module.exports = {
  sumArray : function (array){
    var sum = 0;
    for(var i in array) sum += array[i];
    return sum;
  },
  printArray : function(array){
    for(var i in array)console.log(`Array Index [${i}] = ${array[i]}`);
  },
  concatArray : function(lArray,rArray){
    var tmpArray = [],lLen = lArray.length,rLen = rArray.length;
    for(var i = 0; i < lLen; i++)tmpArray[i] = lArray[i];
    for(var i = lLen, j = 0; i < lLen+rLen; i++,j++)tmpArray[i] = rArray[j];
    return tmpArray;
  }
};
