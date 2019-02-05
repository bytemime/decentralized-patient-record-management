const HdWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');
const infuraSetup = require('./infura');
const provider = new HdWalletProvider(
	infuraSetup.mnemonic,
	infuraSetup.infuraEndPoint
);

const web3 = new Web3(provider);

const deploy = async () => {
	const accounts = await web3.eth.getAccounts();
	console.log('attempting deployment from', accounts[0]);
	const response = await new web3.eth.Contract(JSON.parse(interface))
		.deploy({
			data: '0x' + bytecode
		})
		.send({ gas: '1000000', from: accounts[0] });
	console.log('contract deployed to ', response.options.address);
};
deploy();
