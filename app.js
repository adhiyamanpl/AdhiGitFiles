const _= require('lodash')
const array1 = [1,[2,[3,4]]]
const newarray = _.flattenDeep(array1)
console.log(newarray)