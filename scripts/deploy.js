// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");
const path = require('path');
const fs = require('fs');

async function main() {

  const [deployer] = await ethers.getSigners();

  const contractName = "ConverterRegistryContract";
  console.log(
  "Deploying contracts with the account:",
  deployer.address
  );

  const ConverterRegistryContract = await hre.ethers.getContractFactory(contractName);

  //const contract = await ethers.deployContract("ConverterRegistryContract", {gasLimit: 203560});
  const contract = await ConverterRegistryContract.deploy({gasLimit: 203560});
  const deployTx = await contract.waitForDeployment();

  const address = contract.target; 
  console.log("Contract deployed at:", address);

  const networkName = deployer.provider.networkName || "local";
  const blockStart = deployTx.blockNumber || 0;

  
  console.log(`updateStartBlock(contractName=${contractName}, address=${address}, blockStart=${blockStart}, networkName=${networkName});`);  
  updateContractData(contractName, address, blockStart, networkName);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});


function updateContractData(dataSource, address, startBlock, networkName) {
  const filepath = path.join(__dirname, '../subgraph/networks.json');
  const networksRaw = fs.readFileSync(
    filepath,
    {
      encoding: 'utf-8',
    },
  );
  const networks = JSON.parse(networksRaw);
  networks[networkName][dataSource].startBlock = startBlock || 0;
  networks[networkName][dataSource].address = address || "unknown";
  fs.writeFileSync(filepath, JSON.stringify(networks, null, 2));
}