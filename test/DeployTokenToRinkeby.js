// const { expect } = require("chai");

// describe("Deploying Token contract to Rinkeby", function () {
//     it("Creating new token", async function () {

//         const Token = await ethers.getContractFactory("Token");

//         const hardhatToken = await Token.deploy("AntonSuperToken", "AST", 0, 10000);

//         console.log("Token address:", hardhatToken.address);
//         console.log("Token name:", await hardhatToken.name());
//         console.log("Token symbol:", await hardhatToken.symbol());
//         console.log("Token total supply:", (await hardhatToken.totalSupply()).toString());

//     });
// });