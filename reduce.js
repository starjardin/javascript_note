function total(arr) {
  return arr.reduce((acc, value) => acc + value, 0);
}

console.log(total([1,2,3])); // 6

function stringConcat(arr) {
  return arr.reduce((acc, value) => `${acc + value}`.toString() , 0);
}

console.log(stringConcat([1,2,3])); // "123"
