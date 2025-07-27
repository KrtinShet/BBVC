# Contracts

This directory contains the Hardhat project for the Certify platform's smart contracts. These contracts are responsible for the core logic of certificate issuance and verification on the Ethereum blockchain.

## Project Structure

-   `contracts/`: Contains the Solidity smart contracts.
    -   `Certificate.sol`: The main ERC721 contract for issuing and managing certificates.
    -   `EntryPoint.sol`: (Placeholder/Index contract - currently not fully implemented in the provided context).
-   `scripts/`: Deployment scripts for the smart contracts.
    -   `deploy.js`: A sample deployment script.
-   `test/`: Unit tests for the smart contracts.
    -   `certificate.test.js`: Tests for the `Certificate.sol` contract.
-   `hardhat.config.js`: Hardhat configuration file.
-   `package.json`: Node.js package configuration and dependencies.

## Technologies Used

-   **Solidity**: The programming language for writing smart contracts.
-   **Hardhat**: An Ethereum development environment for compiling, deploying, testing, and debugging your smart contracts.
-   **OpenZeppelin Contracts**: A library of secure smart contracts for Ethereum, used for ERC721, ERC721Enumerable, ERC721URIStorage, and Ownable functionalities.
-   **Ethers.js**: A JavaScript library for interacting with the Ethereum blockchain and smart contracts.
-   **Chai**: A BDD / TDD assertion library for Node.js and the browser, used with Hardhat for testing.

## Installation

To set up the contracts project, navigate to this directory and install its dependencies:

```bash
cd contracts
npm install
```

## Configuration

### Hardhat Network

`hardhat.config.js` configures the Hardhat development environment. By default, it's set up for a local Hardhat Network. You can extend this configuration to include other networks (e.g., Sepolia, Polygon Mumbai) by adding network details (RPC URL, private keys) to `hardhat.config.js`.

```javascript
// contracts/hardhat.config.js

require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-ethers");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",
  networks: {
    // Example for Sepolia testnet
    sepolia: {
      url: "YOUR_SEPOLIA_RPC_URL",
      accounts: ["YOUR_PRIVATE_KEY"]
    },
    // Example for Polygon Mumbai testnet
    mumbai: {
      url: "YOUR_MUMBAI_RPC_URL",
      accounts: ["YOUR_PRIVATE_KEY"]
    }
  }
};
```

**Security Note:** Never expose your private keys directly in `hardhat.config.js` in a production environment. Use environment variables (e.g., `dotenv`) for sensitive information.

## Compiling Contracts

To compile the Solidity smart contracts, run the following command from the `contracts` directory:

```bash
npm run build
# or
npx hardhat compile
```

This will generate the contract ABIs and bytecode in the `artifacts/` directory.

## Deploying Contracts

Smart contracts can be deployed to a local Hardhat Network or a public testnet.

### Local Deployment (Hardhat Network)

1.  Start the Hardhat Network (if not already running) in a separate terminal:

    ```bash
    cd contracts
    npx hardhat node
    ```

2.  Deploy the contracts using the provided script:

    ```bash
    cd contracts
    npx hardhat run scripts/deploy.js --network localhost
    ```

    **Note:** The `deploy.js` script is a basic example. You will likely need to modify it to deploy your `Certificate.sol` contract with appropriate constructor arguments.

### Deployment to a Testnet (e.g., Sepolia)

1.  Ensure your `hardhat.config.js` is configured for the target testnet (e.g., `sepolia`).
2.  Run the deployment script, specifying the network:

    ```bash
    cd contracts
    npx hardhat run scripts/deploy.js --network sepolia
    ```

## Testing Contracts

To run the unit tests for the smart contracts, navigate to the `contracts` directory and execute:

```bash
cd contracts
npm test
# or
npx hardhat test
```

Tests are written using Mocha and Chai, as configured in `certificate.test.js`.

## Interacting with Contracts

After deployment, you can interact with your contracts using Hardhat's console or by integrating them into your client application. The `client` application is designed to interact with the deployed `Certificate.sol` contract by reading its ABI and address from `client/public/Certificate.json`.