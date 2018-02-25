// imports
/// assert-testing, ganache-cli - local eth network, web3 - FE to ETH network connector
const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const provider = ganache.provider();
const web3 = new Web3(provider);

// compiled contract
/// interface and bytecode
const { interface, bytecode } = require('../compile');