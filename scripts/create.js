const { ethers, upgrades } = require("hardhat");

async function main() {
	const WhyNotWorldGameNFT = await ethers.getContractFactory("WhyNotWorldGameNFT");
	const whyNotWorldGameNFT = await upgrades.deployProxy(WhyNotWorldGameNFT, ["WhyNotWorldGame", "WNWG", "https://d1k6fm1hgt02b7.cloudfront.net"]);
	await whyNotWorldGameNFT.deployed();
	console.log("WhyNotWorldGame deployed to:", whyNotWorldGameNFT.address);
}

main();
