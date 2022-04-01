const { slice } = require('./1-slice');
const { merge }= require('./2-merge');
const { generateUnorderedArray } = require('./4-generate-unordered-array');

function sort(array) {
  if (array.length <= 1) {//2
    return array;//1
  }
  const middle = Math.floor(array.length / 2);//4
  const left = slice(array, 0, middle);//5
  const right = slice(array, middle, array.length);//5
  return merge(sort(left), sort(right));//1
}

const array = generateUnorderedArray(10);
console.log(array);
console.log(sort(array));

/*
O(n)= log(n(2+1+ 4 + 5+ 5 + 1 ))   = log(n)

O(n) = complexité logarithmique */
