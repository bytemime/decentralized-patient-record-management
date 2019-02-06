# Decentralized patient record management

[![Build Status](https://travis-ci.org/bytemime/decentralized-patient-record-management.svg?branch=master)](https://travis-ci.org/bytemime/decentralized-patient-record-management)
![Dependencies](https://img.shields.io/david/bytemime/decentralized-patient-record-management.svg?style=flat)
![Repo Size](https://img.shields.io/github/repo-size/bytemime/decentralized-patient-record-management.svg?style=flat)
![License](https://img.shields.io/github/license/bytemime/decentralized-patient-record-management.svg?style=flat)

## ABI

```
[
	{
		"constant": false,
		"inputs": [
			{
				"name": "_str",
				"type": "string"
			}
		],
		"name": "setHash",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getHash",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
]
```
