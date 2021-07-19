require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid nasty fresh space strong radar prefer purity gentle light army gentle'; 
let testAccounts = [
"0x64bfd4660589e0c5d8c285e42d36be605c8bad528a041942f9a1555e85727776",
"0x57a542618315854d6edbad82c8027269e4ca60e4d2150d7cf73c59da9260cc20",
"0xc0b1fe22f0b2b4763b42c9332bc17f443a6f8b2f110d4c47c15c70ffaf2c45ba",
"0x932329eff9266fa75d842328f942be0a9b4c6612dd852b48705993db09e9607a",
"0x6d65d85f4a64e8f25aebd6d2ba44ed9a1f7b302befc85414f9dd4519235be0e5",
"0xab2fc2af1bac9756068f09d5056c954d4afc1c37e9d8431e3a217288557e0576",
"0x1bdc516ace74b686f033d1bafa7bdbb104cd291265bb13b9f14a6ee3a73066c3",
"0x094de76fd038fb173c1366524beb65ff455d02c9598b43bc828665c0fce92660",
"0x2660759c152bc8f91d81ced36adb371a6028e9c3cc0fac64b417d402d310ae28",
"0x6a2b578fed490a9fe35cc899dd7bd2ffe1f139eed1dc3c20b0c4b435eec755fe"
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

