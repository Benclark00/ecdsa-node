const secp = require("ethereum-cryptography/secp256k1");
const utils = require("ethereum-cryptography/utils");

const privateKey = (secp.secp256k1.utils.randomPrivateKey());

console.log('private key: ', (utils.toHex(privateKey)));

const publicKey = secp.secp256k1.getPublicKey(privateKey);

let signature = (secp.secp256k1.sign(utils.utf8ToBytes("Test signature"), privateKey))

console.log('signature: ', signature)

let s = signature.r.toString(16)

console.log('s : ', s)

console.log('public key: ', (utils.toHex(publicKey)));
