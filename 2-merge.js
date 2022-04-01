function merge(array1, array2) {
  let mergedArray = [];/*1*/
  let i = 0;/*1*/
  let j = 0;//1 
  while (i < array1.length && j < array2.length) { //5
    if (array1[i] < array2[j]) {2
      mergedArray.push(array1[i]);// 3
      i++;
    } else {
      mergedArray.push(array2[j]);//3
      j++;
    }
  }
  while (i < array1.length) {
    mergedArray.push(array1[i]);
    i++;
  }
  while (j < array2.length) {
    mergedArray.push(array2[j]);
    j++;
  }
  return mergedArray;1
}

module.exports = { merge };
 /*
O(n) = 1 + 5(n)*(2+1+3) +  1  = 

O(n) = complexité lineaire */
