import { BigNumber, Signer } from "ethers";
import { expect, assert } from "chai";
import {
    GenericERC20,
    CapsuleFactory,
    ERC20Capsule,
    NftCapsule,
    MixedCapsule,
    GenericERC20__factory,
    CapsuleFactory__factory,
    ERC20Capsule__factory,
    NftCapsule__factory,
    MixedCapsule__factory,
} from "../typechain";
const { ethers, network } = require("hardhat");

describe("capsule unit tests", function () {
    const amount1 = ethers.utils.parseEther("1000");
    let capsuleFactory: CapsuleFactory,
        erc20Capsule: ERC20Capsule,
        nftCapsule: NftCapsule,
        mixedCapsule: MixedCapsule,
        WETH: GenericERC20,
        USDT: GenericERC20,
        USDC: GenericERC20,
        DAI: GenericERC20,
        user: Signer,
        user2: Signer;

    beforeEach(async function () {
        const accounts = await ethers.getSigners(2);
        user = accounts[0];
        user2 = accounts[1];

        const erc20Factory: GenericERC20__factory = await ethers.getContractFactory(
            "GenericERC20"
        );

        DAI = await erc20Factory.deploy("DAI", "DAI", "18");
        USDC = await erc20Factory.deploy("USDC", "USDC", "6");
        USDT = await erc20Factory.deploy("USDT", "USDT", "6");
        WETH = await erc20Factory.deploy("WETH", "WETH", "18");

        const capsuleFactoryContract: CapsuleFactory__factory = await ethers.getContractFactory(
            "CapsuleFactory"
        );
        capsuleFactory = await capsuleFactoryContract.deploy();
        await capsuleFactory.deployed();

        const erc20CapsuleContract: ERC20Capsule__factory = await ethers.getContractFactory(
            "ERC20Capsule"
        );
        erc20Capsule = await erc20CapsuleContract.deploy();
        await erc20Capsule.deployed();

        const nftCapsuleContract: NftCapsule__factory = await ethers.getContractFactory(
            "NftCapsule"
        );
        nftCapsule = await nftCapsuleContract.deploy();
        await nftCapsule.deployed();

        const mixedCapsuleContract: MixedCapsule__factory = await ethers.getContractFactory(
            "MixedCapsule"
        );
        mixedCapsule = await mixedCapsuleContract.deploy();
        await mixedCapsule.deployed();
    });

    describe("capsule factory", function () {
        describe("createWalletContract", function () {
            it("", async function () {});
        });
    });
});
