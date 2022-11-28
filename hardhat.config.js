require("@nomiclabs/hardhat-waffle");

const RINKEBY_PRIVATE_KEY = "11f939ddabbc3a92713dbe263614bfff40c9939a9260c57a90156097bcbbac7d";
const MNEMONIC = "sphere urge bacon lawn tag poverty pepper pupil verb avoid diamond net";
const ALCHEMY_API_URL = "https://eth-rinkeby.alchemyapi.io/v2/hN4I0SfRrVbs00dfR9bSE5bcmH9FUpza";
const LOCAL_HOST_URL = "http://127.0.0.1:8545";

module.exports = {
    solidity: {
        compilers: [
            {
                version: "0.7.3"
            },
            {
                version: "0.5.12",
            },
            {
                version: "0.8.10",
            }
        ]
    },
    networks: {
        hardhat: {
            forking: {
                url: ALCHEMY_API_URL,
            }
        },
        rinkeby: {
            url: ALCHEMY_API_URL,
            accounts: [`${RINKEBY_PRIVATE_KEY}`],
            // accounts: {
            //     mnemonic: MNEMONIC,
            // }

        },
        metisStardust: {
            url: ALCHEMY_API_URL,
            accounts: [`${RINKEBY_PRIVATE_KEY}`]
        },
        local: {
            url: LOCAL_HOST_URL,
            // accounts: [`${RINKEBY_PRIVATE_KEY}`],
            mnemonic: MNEMONIC
        }
    },
    mocha: {
        timeout: 400000
    }

};
