const {expect} = require("chai");
const {ethers} = require("hardhat");

describe("============ Payments contract tests ============", function () {
    let acc1
    let acc2
    let payments

    beforeEach(async function () {
        [acc1, acc2] = await ethers.getSigners()
        const Payments = await ethers.getContractFactory("Payments", acc1)
        payments = await Payments.deploy()
        await payments.deployed()
        console.log(payments.address)
    })

    it("should be deployed", async function () {
        expect(payments.address).to.be.properAddress
    })
})