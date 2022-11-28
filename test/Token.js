// const { expect } = require("chai");

// describe("Token contract test", function () {
//     it("Complex test for Token contract.", async function () {
//         const [owner, acc2, acc3] = await ethers.getSigners();

//         const Token = await ethers.getContractFactory("Token");

//         const hardhatToken = await Token.deploy("MyNewToken", "MNT", 0);

//         console.log("Token address:", hardhatToken.address);
//         console.log("Token name:", await hardhatToken.name());
//         console.log("Token symbol:", await hardhatToken.symbol());

//         const ownerBalance = await hardhatToken.balanceOf(owner.address);

//         // await hardhatToken.burn(owner.address, 1000);
//         const totalSupplyRes = await hardhatToken.totalSupply()
//         console.log("Total supply:", totalSupplyRes.toString());

//         await hardhatToken.connect(owner).mint(acc3.address, 1000);

//         await hardhatToken.connect(acc3).approve(owner.address, 200);

//         const ownerBeforeTrans = await hardhatToken.balanceOf(owner.address);
//         const acc2BeforeTrans = await hardhatToken.balanceOf(acc2.address);
//         const acc3BeforeTrans = await hardhatToken.balanceOf(acc3.address);
//         console.log("Befor transfer. Owner:", ownerBeforeTrans.toString(), "Acc2:", acc2BeforeTrans.toString(), "Acc3:", acc3BeforeTrans.toString());

//         await hardhatToken.transferFrom(acc3.address, acc2.address, 100);
//         await hardhatToken.transferFrom(acc3.address, acc2.address, 100);
//         // await hardhatToken.transferFrom(acc3.address, acc2.address, 100);

//         // По умолчанию транзакция вызывается от имени первого аккаунта, в нашем случае owner.
//         // Чтобы сделать перевод от имени аккаунта использовать .connect(acc)
//         // await hardhatToken.connect(owner).transferFrom(acc3.address, acc2.address, 100);

//         const ownerAfterTrans = await hardhatToken.balanceOf(owner.address);
//         const acc2AfterTrans = await hardhatToken.balanceOf(acc2.address);
//         const acc3AfterTrans = await hardhatToken.balanceOf(acc3.address);
//         console.log("After transfer. Owner:", ownerAfterTrans.toString(), "Acc2:", acc2AfterTrans.toString(), "Acc3:", acc3AfterTrans.toString());

//         // await hardhatToken.transfer("0x70A920f7e240372BF31623C1e42010Fb71C2D378", 100);

//         // await hardhatToken.connect(acc2).test();



//         // const testResult = await hardhatToken.test();
//         // console.log("testResult:", testResult.toString());



//         // expect(await hardhatToken.totalSupply()).to.equal(ownerBalance);

// await adopt.adoptF("parameter1", {  value: ethers.utils.parseEther("1.0")  });
// await adopt.adoptF( {  value: 1000 });
//adopt это переменная через которую мы работаем с нашим контрактом
//adoptF функция из контракта которую мы вызываем
//параметр value это сколько эфира мы хотим отправить в функцию которая может принимать эфиры
//ethers.utils.parseEther вспомогательная функция которая позволяет нам задать значение в эфирах уже с учетом всех этих "decimals"

//     });
// });