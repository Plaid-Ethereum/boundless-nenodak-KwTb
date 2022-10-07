require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give knife fortune silver shock rifle smile punch grace inflict suit sentence'; 
let testAccounts = [
"0x1b1c175f026474e2fd277714e1e3bab86612548c9a6d71c5779e94c979a1bbf7",
"0x38a5ade1d751b9cfd478ab880fefb5d06eadb812f9089ee93dbb4e8ac355939a",
"0x00c5262b7d5001944c3554509ad73b432d3e8bac0a892a979a7eac4b89d4f2dc",
"0xb509d80d526124f76c176e269ba9b6764036b87adc8edadfa14e8cc91c938049",
"0x04e6e242154560a9c0741cb8e46631c4a606d12c2b67d2ba155524677c5b4225",
"0x374b9d6f275c1ebb06e5ab20384e8beb5bd385d0b0f9dd9ca314d215ded2bd54",
"0x1a1b4463e655be2cca3a2ae77a4744d4646f8c5bee27225e38e5a44c84ec62f2",
"0xa594509af8ba745623a98b34393e577939916e07d942e5629c4430560a72f5be",
"0xe297924edf7555ced08337dcd1b83cbf34e7590f3847ed2dd1edc3fadf4a3797",
"0x437fb4ff0e918afa8b0580314e3035c1b4638a7e939af6d642e6c178ae3346c2"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


