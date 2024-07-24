const {readFileSync,writeFileSync} = require(`fs`)
const readfirst = readFileSync('./content/first.txt','utf8')
const readsecond = readFileSync('./content/second.txt','utf-8')
console.log(readfirst,readsecond)
writeFileSync('./content/writefirsttest2.txt',
    `Hello Append this`
,{flag:'a'})