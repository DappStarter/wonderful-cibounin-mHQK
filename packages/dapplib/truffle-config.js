require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz kiwi october slab chapter deny radar property harvest beach tail tag'; 
let testAccounts = [
"0xa1d565fbb1d2d2130793f6edfae0522539c28f9f16d51f57aa0752e73fe980ad",
"0xb874a58494632e928303d4fd638f7b9977f85dd1d8840bc30556e9ef608d3aeb",
"0x24c29a7f474e142a970ab1692f1f2f8c36904c7e59379692e7291a9997807062",
"0x59b5ad97761c07d15e3c7ae5d3e6b29599e7061a5e058714577c7b1627e8cd52",
"0xdc903b35480884d6e8be2c169fb53780a5c0cf54108c0f54bd58b8b7c249253d",
"0x7b5b2d484fc1066ea17a80187db5515a36f8a76e87d0585a351eb89138508ee0",
"0x93f5939f6d73ee45654023cac15297a0f5a60033c0912ec9ce442b49bef47ff5",
"0x8c7b02fb7247b09c171cb68029155ad7247178ad8a789f93a0b0bd6c00b95f82",
"0x4946cb35f9e17ace571aa0f637584e7b7d0a09af36d5567c2c96aec5fd712ea1",
"0x85d94a906eab561818ec3172a1441edda4d349abc95f161e03fb4078e5c3e96a"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

