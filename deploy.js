const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile.js');

const provider = new HDWalletProvider(
    'test',
    'test'
);

const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();

    const reemar = await new web3.eth.Contract(JSON.parse(interface))
      .deploy({data: bytecode, arguments: []})
      .send( {from: accounts[0], gas: '2000000'});
};

deploy();