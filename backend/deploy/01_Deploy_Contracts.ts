import { DeployFunction } from "hardhat-deploy/types";
import { network } from "hardhat";
import {
    developmentChains,
    VERIFICATION_BLOCK_CONFIRMATIONS,
} from "../helper-hardhat-config";
import { verify } from "../utils/verify";

const deployFunction: DeployFunction = async ({ getNamedAccounts, deployments }) => {
    const { deploy, log } = deployments;

    const { deployer } = await getNamedAccounts();
    const chainId: number | undefined = network.config.chainId;
    if (!chainId) return;

    const waitConfirmations: number = developmentChains.includes(network.name)
        ? 1
        : VERIFICATION_BLOCK_CONFIRMATIONS;

    log("-----------------------------------------------------------");
    log("deploying......");

    const capsuleFactory = await deploy("CapsuleFactory", {
        from: deployer,
        log: true,
        args: [],
        waitConfirmations: waitConfirmations,
    });

    const erc20Capsule = await deploy("ERC20Capsule", {
        from: deployer,
        log: true,
        args: [],
        waitConfirmations: waitConfirmations,
    });

    const mixedCapsule = await deploy("MixedCapsule", {
        from: deployer,
        log: true,
        args: [],
        waitConfirmations: waitConfirmations,
    });

    const nftCapsule = await deploy("NftCapsule", {
        from: deployer,
        log: true,
        args: [],
        waitConfirmations: waitConfirmations,
    });

    // if (!developmentChains.includes(network.name)) {
    //     await verify(capsuleFactory.address, []);
    // }
};

export default deployFunction;
deployFunction.tags = ["all", "main"];
