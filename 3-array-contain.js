function arrayContain(array, number) {
  for (let i = 0; i < array.length; i++) { //4
    if (array[i] === number) {//3
      return true;//1
    }
  }
  return false;//1
}

module.exports = { arrayContain };

 /*O(n) = complexité logarithmique */
