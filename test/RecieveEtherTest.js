// const {expect} = require("chai");

// describe("============ ReceiveEther contract tests ============", function () {

//     it("Test 1", async function () {
//         const [owner, acc1, acc2, acc3] = await ethers.getSigners();

//         const receiveEtherFactory = await ethers.getContractFactory("ReceiveEther"); //Get ReceiveEther factory
//         const sendEtherFactory = await ethers.getContractFactory("SendEther"); //Get SendEther factory

//         const receiveEtherContract = await receiveEtherFactory.deploy(); //Get SendEther deployed
//         const sendEtherContract = await sendEtherFactory.deploy(); //Get SendEther factory

//         console.log("ReceiveEther contract address:", receiveEtherContract.address);
//         console.log("ReceiveEther contract initial balance:", (await ethers.provider.getBalance(receiveEtherContract.address)).toString());

//         console.log("SendEther contract address:", sendEtherContract.address);
//         console.log("SendEther contract initial balance:", (await ethers.provider.getBalance(sendEtherContract.address)).toString());

//         console.log("Owner balance:", (await ethers.provider.getBalance(owner.address)).toString());
//         console.log("Acc1 balance:", (await ethers.provider.getBalance(acc1.address)).toString());
//         console.log("Msg:", (await receiveEtherContract).toString());

//         await owner.sendTransaction({
//             to: receiveEtherContract.address,
//             value: ethers.utils.parseEther("1.0") // Sends exactly 1.0 ether to receiveEtherContract
//         });

//         console.log("ReceiveEther balance after got 1 ether", (await ethers.provider.getBalance(receiveEtherContract.address)).toString());

//         await receiveEtherContract.testPayableFunction({
//             value: ethers.utils.parseEther("1.0")
//         }); // If modificator payable we can send Ethers with {value: ethers.utils.parseEther("1.0")}

//         console.log("ReceiveEther balance after testPayableFunction()", (await ethers.provider.getBalance(receiveEtherContract.address)).toString());


//     });

//     it("Test 2", async function () {
//         const [owner, acc1, acc2, acc3] = await ethers.getSigners();

//         const receiveEtherFactory = await ethers.getContractFactory("ReceiveEther"); //Get ReceiveEther factory
//         const sendEtherFactory = await ethers.getContractFactory("SendEther"); //Get SendEther factory

//         const receiveEtherContract = await receiveEtherFactory.deploy(); //Get SendEther deployed
//         const sendEtherContract = await sendEtherFactory.deploy(); //Get SendEther factory

//         // const hardhatToken = await Token.attach(
//         //   "0x39C1F04446C3953ad63f4EAcDf816Fd357D02c8E" // The deployed contract address
//         // );

//         console.log("ReceiveEther contract address:", receiveEtherContract.address);
//         console.log("ReceiveEther contract initial balance:", (await ethers.provider.getBalance(receiveEtherContract.address)).toString());

//         // await hardhatToken.deposit();
//         //await hardhatToken.deposit(555, { value: ethers.utils.parseEther("1.0")  });
//         /// await hardhatToken.deposit( { value: ethers.utils.parseEther("1.0")  });
//         // await network.provider.request({
//         //   method: "hardhat_impersonateAccount",
//         //   params: ["0x9D4bb3F3B3F439C22Db3f1B7c5b6d649E2D707Ba"],
//         // });

//         // const testAccount = await ethers.provider.getSigner('0x9D4bb3F3B3F439C22Db3f1B7c5b6d649E2D707Ba')
//         // await hardhatToken.connect(testAccount).transfer(owner.address,444);
//         // await hardhatToken.connect(testAccount).transfer(owner.address,222);

//         // const ownerBalance = await hardhatToken.balanceOf(owner.address);
//         // const testAccountBalance = await hardhatToken.balanceOf("0x9D4bb3F3B3F439C22Db3f1B7c5b6d649E2D707Ba");
//         // console.log("ownerBalance",ownerBalance.toString());
//         // console.log("testAccountBalance",testAccountBalance.toString());
//         // console.log("totalSupply",(await hardhatToken.totalSupply()).toString());
//         //expect(await hardhatToken.totalSupply()).to.equal(ownerBalance);
//     });

// });