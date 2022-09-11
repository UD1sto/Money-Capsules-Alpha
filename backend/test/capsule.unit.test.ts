import { BigNumber, Contract, ContractFactory } from "ethers";
import { expect, assert } from "chai";
const { ethers, network } = require("hardhat");

describe("capsule unit tests", function () {
    const amount1 = ethers.utils.parseEther("1000");
    let capsuleFactory: Contract,
        erc20Capsule: Contract,
        nftCapsule: Contract,
        mixedCapsule: Contract,
        wethToken: Contract,
        usdcToken: Contract,
        wbtcToken: Contract,
        daiToken: Contract,
        user: Contract,
        user2: Contract;

    beforeEach(async function () {
        const accounts = await ethers.getSigners(2);
        user = accounts[0];
        user2 = accounts[1];

        const wethTokenFactory: ContractFactory = await ethers.getContractFactory("WETH");
        wethToken = await wethTokenFactory.deploy();
        // prettier-ignore
        await wethToken.deployed();

        const daiTokenFactory: ContractFactory = await ethers.getContractFactory("DAI");
        daiToken = await daiTokenFactory.deploy();
        // prettier-ignore
        await daiToken.deployed();

        const usdcTokenFactory: ContractFactory = await ethers.getContractFactory("USDC");
        usdcToken = await usdcTokenFactory.deploy();
        // prettier-ignore
        await usdcToken.deployed();

        const wbtcTokenFactory: ContractFactory = await ethers.getContractFactory("WBTC");
        wbtcToken = await wbtcTokenFactory.deploy();
        // prettier-ignore
        await wbtcToken.deployed();

        const capsuleFactoryContract: ContractFactory = await ethers.getContractFactory(
            "CapsuleFactory"
        );
        capsuleFactory = await capsuleFactoryContract.deploy();
        // prettier-ignore
        await capsuleFactory.deployed();

        const erc20CapsuleContract = await ethers.getContractFactory("ERC20Capsule");
        erc20Capsule = await erc20CapsuleContract.deploy();
        // prettier-ignore
        await erc20Capsule.deployed();

        const nftCapsuleContract = await ethers.getContractFactory("NftCapsule");
        nftCapsule = await nftCapsuleContract.deploy();
        // prettier-ignore
        await nftCapsule.deployed();

        const mixedCapsuleContract = await ethers.getContractFactory("MixedCapsule");
        mixedCapsule = await mixedCapsuleContract.deploy();
        // prettier-ignore
        await mixedCapsule.deployed();
    });

    describe("capsule factory", function () {
        describe("createWalletContract", function () {
            it("", async function () {});
        });
    });
});
