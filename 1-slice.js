function slice(array, start, end) {
  let slicedArray = [];1
  for (let i = start; i < end; i++) { /*5*/
    slicedArray.push(array[i]);/*2*/
  }
  return slicedArray; /*1*/
}

module.exports = { slice };

/*
o(n) = 2 + 5(n)*(2 )+ 1 = 2 + 5(n) + 1 


O(n) = complexite  lineaire 
*/
