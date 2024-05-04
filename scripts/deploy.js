const hre = require("hardhat");

async function main() {
    console.log("Deploying Contract...");
    const horoscope = await hre.ethers.deployContract("contracts/horoscopeNFT.sol:horoscopeNFT");

    console.log("horoscopeNFT Contract deployed to address:", horoscope.target);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });