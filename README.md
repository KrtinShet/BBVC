# Certify - Blockchain-based Certificate Validation System

Certify is a decentralized platform for issuing and verifying certificates using the Ethereum Blockchain. This monorepo contains three main components:

- `client`: A React-based frontend for interacting with the system.
- `contracts`: Hardhat project containing the smart contracts for certificate issuance and verification.
- `server`: A Node.js Express server for handling IPFS pinning via Pinata.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Running the Application](#running-the-application)
- [Testing](#testing)
- [Additional Notes](#additional-notes)

## Prerequisites

Ensure you have the following installed on your system:

- [Node.js](https://nodejs.org/en/) (LTS version recommended)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/) (npm is used in this guide)
- [Hardhat](https://hardhat.org/)
- [MetaMask](https://metamask.io/) browser extension (or similar Ethereum wallet)

## Installation

To set up the project, navigate to each component's directory and install its dependencies.

### 1. Root Dependencies

No direct dependencies in the root. All dependencies are managed within their respective sub-projects.

### 2. Contracts

Navigate to the `contracts` directory and install dependencies:

```bash
cd contracts
npm install
```

### 3. Client

Navigate to the `client` directory and install dependencies:

```bash
cd client
npm install
```

### 4. Server

Navigate to the `server` directory and install dependencies:

```bash
cd server
npm install
```

## Configuration

### Pinata API Keys (for Server)

The `server` component uses Pinata for IPFS pinning. You need to set up your Pinata API keys as environment variables.

1. Create a `.env` file in the `server` directory.
2. Add your Pinata API Key and Secret API Key to the `.env` file:

   ```
   PINATA_API_KEY=your_pinata_api_key
   PINATA_SECRET_API_KEY=your_pinata_secret_api_key
   ```

### Hardhat Network (for Contracts)

The `contracts` project is configured to use Hardhat Network by default. You can configure other networks (e.g., Sepolia, Polygon Mumbai) in `contracts/hardhat.config.js`.

### Client Ethereum Network

The `client` application is configured to connect to `localhost` (Hardhat Network) by default. You can change this in `client/src/ethereum/index.tsx` to connect to other networks like Sepolia or Polygon Mumbai.

## Running the Application

To run the full application, you need to start each component separately.

### 1. Start Hardhat Network (Local Blockchain)

In a new terminal, navigate to the `contracts` directory and start the Hardhat Network:

```bash
cd contracts
npx hardhat node
```

This will start a local Ethereum blockchain. Keep this terminal open.

### 2. Deploy Smart Contracts

In another terminal, navigate to the `contracts` directory and deploy your smart contracts. The `deploy.js` script is a placeholder; you'll typically deploy your `Certificate.sol` contract.

```bash
cd contracts
npx hardhat run scripts/deploy.js --network localhost
```

Alternatively, you can deploy contracts directly from the client application's "Deploy a new Contract" page.

### 3. Start the IPFS Pinning Server

In a new terminal, navigate to the `server` directory and start the Node.js server:

```bash
cd server
npm start
```

This server will handle requests for pinning files to IPFS via Pinata.

### 4. Start the Client Application

In a new terminal, navigate to the `client` directory and start the React development server:

```bash
cd client
npm run dev
```

This will open the client application in your browser (usually at `http://localhost:5173`).

## Testing

### Contracts

To run tests for the smart contracts, navigate to the `contracts` directory and execute:

```bash
cd contracts
npx hardhat test
```

### Client

The client-side application does not currently have dedicated unit/integration tests configured in `package.json`. You can run linting checks:

```bash
cd client
npm run lint
```

## Additional Notes

- **Smart Contract ABI and Address:** After deploying your `Certificate.sol` contract, the ABI and address will be available in `client/public/Certificate.json`. The client application reads this file to interact with the deployed contract.
- **IPFS Pinning:** The `server` acts as an intermediary for pinning files to IPFS. Ensure your Pinata API keys are correctly configured.
- **Wallet Connection:** The client application uses Wagmi for wallet connections. Ensure your MetaMask (or other injected wallet) is connected to the correct network (e.g., Hardhat Localhost).
