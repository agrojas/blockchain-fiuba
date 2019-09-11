
var Web3 = require('web3');
var web3 = new Web3();

// Conexion con el nodo  HTTP://127.0.0.1:7545
web3 = new Web3(new Web3.providers.HttpProvider('http://127.0.0.1:7545'))

web3.eth.getAccounts()
.then(accounts => {
    console.log("All accounts ", JSON.stringify(accounts, null))
    return accounts;
})
.then(accounts => {
    return web3.eth.getBalance(accounts[0])
})
.then(balance => {
    console.log("balance in wei ", balance)
    console.log("balance in ether", web3.utils.fromWei(balance, 'ether'))
})
.catch(error => {
    console.log(error)
})