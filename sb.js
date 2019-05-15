function removeElementFromEndOfArray(array) {
  array.slice(0, array.length - 1)
  return array
}
var x = [1,2,3]
console.log(x)
console.log(removeElementFromEndOfArray(x))
console.log(x)
