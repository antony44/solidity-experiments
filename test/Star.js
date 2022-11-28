// const { expect } = require("chai");

// describe("Token contract", function () {
//   it("Deployment should assign the total supply of tokens to the owner", async function () {
//     const [owner, acc1, acc2, acc3, acc4] = await ethers.getSigners();
//     const accounts = await ethers.getSigners();
//     console.log(
//       "Account 0: ", accounts[0].address,
//       "Account 1: ", accounts[1].address,
//       "Account 2: ", accounts[2].address
//     );

//     const Star = await ethers.getContractFactory("Star");

//     const hardhatToken = await Star.deploy(10000, "MyStarToken", 0, "MST", 100000);

//     const ownerBalance = await hardhatToken.balanceOf(owner.address);

//     await hardhatToken.transfer(acc4.address, 200);

//     // await owner.sendTransaction({
//     //   to: acc4.address,
//     //   value: ethers.utils.parseEther("1") // 1 ether
//     // });

//     const acc4Balance = await hardhatToken.balanceOf(acc4.address);

//     await hardhatToken.connect(acc4).transfer(acc3.address, 60);
//     const acc3Balance = await hardhatToken.balanceOf(acc3.address);

//     const ownerBalanceAfter = await hardhatToken.balanceOf(owner.address);
//     const totalSupply = await hardhatToken.totalSupply();

//     // mint(address account, uint256 amount) 

   

//     console.log("Total supply: ", totalSupply.toString());

//     await hardhatToken.mint(acc2.address, 20000);
//     const totalAfterSupply = await hardhatToken.totalSupply();
//     console.log("After supply: ", totalAfterSupply.toString());

//     console.log("Owner balance before: ", acc3.address, ownerBalance.toString());

//     console.log("Acc4 balance: ", acc4.address, acc4Balance.toString());
//     console.log("Acc3 balance: ", acc3.address, acc3Balance.toString());
//     console.log("Owner balance after: ", ownerBalanceAfter.toString());

//     console.log("Star token address: ", hardhatToken.address);


//     // expect(await hardhatToken.totalSupply()).to.equal(ownerBalance);
//   });
// });