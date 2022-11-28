// const { expect } = require("chai");
//
// describe("weth contract", function () {
//     it("Deployment should assign the total supply of tokens to the owner", async function () {
//         const [owner] = await ethers.getSigners();
//
//         const WethToken = await ethers.getContractFactory("WETH9");
//
//
//         //const hardhatToken = await WethToken.deploy();
//
//         const hardhatToken = await WethToken.attach(
//             "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2" // The deployed contract address
//         );
//
//         console.log("Token address:", hardhatToken.address);
//
//         // await hardhatToken.deposit();
//         //await hardhatToken.deposit(555, { value: ethers.utils.parseEther("1.0")  });
//         /// await hardhatToken.deposit( { value: ethers.utils.parseEther("1.0")  });
//         await network.provider.request({
//             method: "hardhat_impersonateAccount",
//             params: ["0x85d74963e011088e8fACD733867cef9E92DF5d1a"],
//         });
//
//         const testAccount = await ethers.provider.getSigner('0x85d74963e011088e8fACD733867cef9E92DF5d1a')
//         await hardhatToken.connect(testAccount).transfer(owner.address,1000000);
//
//
//         const ownerBalance = await hardhatToken.balanceOf(owner.address);
//         console.log("ownerBalance",ownerBalance.toString());
//         console.log("totalSupply",(await hardhatToken.totalSupply()).toString());
//         //expect(await hardhatToken.totalSupply()).to.equal(ownerBalance);
//     });
// });