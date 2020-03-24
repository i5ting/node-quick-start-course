#!/usr/bin/env node

var argv = process.argv;

argv.shift();

console.log('argv')
for(var i in argv){
  console.log(`    [${i}] = ${argv[i]}`)
}

console.log(`__dirname = ${__dirname}`)
console.log(`__filename = ${__filename}`)
console.log(`process.cwd() = ${process.cwd()}`)
console.log(`process.env = ${JSON.stringify(process.env, ' ', 4)}`)
console.log(`__dirname = ${__dirname}`)
