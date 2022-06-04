const abiDecoder = require('abi-decoder');

const testABI = []

abiDecoder.addABI(testABI);
const testDATA = "";
const decodedData = abiDecoder.decodeMethod(testDATA);
console.log("decodedData : [" + JSON.stringify(decodedData) + "]");