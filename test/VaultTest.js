const { expect } = require("chai");

const FIVE_ETHERS_SUM = ethers.utils.parseEther("5.0");

describe("============ Vault contract tests ============", function () {

    it("----- deposite method test -----", async function () {
        const [owner, acc1, acc2, acc3] = await ethers.getSigners();
        const vaultFactory = await ethers.getContractFactory("Vault"); //Get ReceiveEther factory
        const vaultContract = await vaultFactory.deploy(); //Get SendEther deployed

        console.log("Vault contract address:", vaultContract.address);
        console.log("Vault contract initial balance:", (await ethers.provider.getBalance(vaultContract.address)).toString());
        console.log("Owner balance:", (await ethers.provider.getBalance(owner.address)).toString());

        await owner.sendTransaction({
            to: vaultContract.address,
            value: FIVE_ETHERS_SUM // Sends exactly 5 ether to vault
        });

        console.log("Vault contract balance after got 5 ether:", (await ethers.provider.getBalance(vaultContract.address)).toString());
        console.log("Deposited sum on the Owner address:", (await vaultContract.balanceOf(owner.address)).toString());

        expect(await ethers.provider.getBalance(vaultContract.address)).to.equal(FIVE_ETHERS_SUM);
    });

    it("----- sending ether to contract address test -----", async function () {
        const [owner, acc1, acc2, acc3] = await ethers.getSigners();
        const vaultFactory = await ethers.getContractFactory("Vault"); //Get ReceiveEther factory
        const vaultContract = await vaultFactory.deploy(); //Get SendEther deployed

        console.log("Vault contract address:", vaultContract.address);
        console.log("Vault contract initial balance:", (await ethers.provider.getBalance(vaultContract.address)).toString());
        console.log("Owner balance:", (await ethers.provider.getBalance(owner.address)).toString());

        await owner.sendTransaction({
            to: vaultContract.address,
            value: FIVE_ETHERS_SUM // Sends exactly 5 ether to vault
        });

        console.log("Vault contract balance after got 5 ether", (await ethers.provider.getBalance(vaultContract.address)).toString());
        console.log("Sum on the address " + owner.address.toString() + " equals:", (await vaultContract.balanceOf(owner.address)).toString());

        expect(await ethers.provider.getBalance(vaultContract.address)).to.equal(FIVE_ETHERS_SUM);
    });

    it("----- wisdraw method test -----", async function () {
        const [owner, acc1, acc2, acc3] = await ethers.getSigners();
        const vaultFactory = await ethers.getContractFactory("Vault"); //Get ReceiveEther factory
        const vaultContract = await vaultFactory.deploy(); //Get SendEther deployed

        console.log("Vault contract address:", vaultContract.address);
        console.log("Vault contract initial balance:", (await ethers.provider.getBalance(vaultContract.address)).toString());
        console.log("Owner balance:", (await ethers.provider.getBalance(owner.address)).toString());

        await owner.sendTransaction({
            to: vaultContract.address,
            value: FIVE_ETHERS_SUM // Sends exactly 5 ether to vault
        });

        console.log("Vault contract balance after got 5 ether", (await ethers.provider.getBalance(vaultContract.address)).toString());
        console.log("Sum on the address " + owner.address.toString() + " equals:", (await vaultContract.balanceOf(owner.address)).toString());

        expect(await ethers.provider.getBalance(vaultContract.address)).to.equal(FIVE_ETHERS_SUM);
    });

});