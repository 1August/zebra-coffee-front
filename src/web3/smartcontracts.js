import Web3 from "web3/dist/web3.min.js";

const TARGET_CONTRACT_ABI = require("./abi.json").abi;

const TARGET_CONTRACT_ADDRESS = "0x79133EC1f4e349329E4E9df0E305f1c1Cf15Bf90";

export async function mockConfigInteract() {
    const web3 = new Web3(Web3.givenProvider || "http://localhost:7545");

    try {
        const contactList = new web3.eth.Contract(
            TARGET_CONTRACT_ABI,
            TARGET_CONTRACT_ADDRESS
        );
        return contactList;
    } catch (error) {
        console.error(error);
    }
}
