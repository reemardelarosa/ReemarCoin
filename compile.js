// import dependency
/// path, filesync, solidity compiler
const path = require('path');
const fs = require('fs');
const solc = require('solc');

//Reemar Coin
// resolve path
const reemarPath = path.resolve(__dirname, 'contract', 'Reemar.sol');
// // read file
const reemarFile = fs.readFileSync(reemarPath, 'utf8');
// // compile using solidity compiler
let compiledContract = solc.compile(reemarFile,1).contracts[':ReemarCoin'];

// Neezil Coin
// resolve path
const neezilPath = path.resolve(__dirname, 'contract', 'Neezil.sol');
// read file
const neezilFile = fs.readFileSync(neezilPath, 'utf8');
// compile using solidity compiler
let compiledContract = solc.compile(neezilFile,1).contracts[':NeezilCoin'];
// console.log(compiledContract);
// export to be reusable
module.exports = compiledContract;