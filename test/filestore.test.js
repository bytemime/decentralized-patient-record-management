const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const { interface, bytecode } = require('../compile');
const web3 = new Web3(ganache.provider());
let accounts;
let filestore;
beforeEach(async () => {
	accounts = await web3.eth.getAccounts();
	filestore = await new web3.eth.Contract(JSON.parse(interface))
		.deploy({ data: bytecode })
		.send({ from: accounts[0], gas: '1000000' });
});

describe('filestore', () => {
	it('should test deployment on local network', () => {
		assert.ok(filestore.options.address);
	});
	it('should send a transaction to the set hash method', async () => {
		await filestore.methods.setHash('sachin123').send({ from: accounts[0] });
		const hash = await filestore.methods.getHash().call();
		assert.equal(hash, 'sachin123');
	});
});
