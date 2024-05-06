const express = require("express");
const app = express();
const cors = require("cors");
const port = 3042;
const secp = require("ethereum-cryptography/secp256k1");
const utils = require("ethereum-cryptography/utils");
const { keccak256 } = require("ethereum-cryptography/keccak");

app.use(cors());
app.use(express.json());

const keys =[
  "9da0f5c541862bae019788f3b6187f9d233b82efc85649ebb5b756a3df98ba65",
  "0de32906585de511082ad68d0e43b7aff395ae97177d5f297cdd13f8dce80c91",
  "ad7f45bc14fe439eb3d0d38a9357c6f8c73666c244001f2078c3ad541547e8d2"
  ]
const balances = {
  "037f868208da416d20fbac77ffbcb883f8248b960cd3f374165d116f873ea2ad3e": [100],
  "03c4acb034e787a0fec7b9613ca01bb0df580917d635edd62bfbc3f1d1d58e504f": [50],
  "021564fe3c7f92b3d1b974ae69790911cf285f2f1e2a3afa9318cc8795ff036a5e": [75],
};

app.get("/balance/:address", (req, res) => {
  const { address } = req.params;
  const balance = balances[address] || 0;
  res.send({ balance });
});

app.post("/send", (req, res) => {
  // get a signature from the client-side application
  // recover the public address from the signature 
  // second comment will be the sender for the req body

  

  const { sender, amount, recipient } = req.body;
  console.log(recipient);
  console.log(amount);
  console.log(sender);
  let senderAddress;
  let mess = utils.toHex(utils.utf8ToBytes("Send "+ amount + " to " + recipient))
  let signature = secp.secp256k1.sign(mess, Buffer.from(sender, 'hex'))
  for (address in balances){
    let bool = secp.secp256k1.verify(signature, mess, address);
    if (bool){
      senderAddress = address;
      break;
    }
  }
  console.log(signature);
  setInitialBalance(senderAddress);
  setInitialBalance(recipient);

  if (balances[sender] < amount) {
    res.status(400).send({ message: "Not enough funds!" });
  } else {
    balances[senderAddress] -= amount;
    balances[recipient] += amount;
    res.send({ balance: balances[senderAddress] });
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}!`);
});

function setInitialBalance(address) {
  if (!balances[address]) {
    balances[address] = 0;
  }
}
