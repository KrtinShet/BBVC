# Client

This directory contains the React-based frontend application for the Certify platform. It allows users to deploy new certificate contracts, issue certificates (single or batch), and verify existing certificates on the Ethereum blockchain.

## Technologies Used

-   **React**: A JavaScript library for building user interfaces.
-   **TypeScript**: A typed superset of JavaScript that compiles to plain JavaScript.
-   **Vite**: A fast build tool that provides a lightning-fast development experience.
-   **Wagmi**: A collection of React Hooks for Ethereum.
-   **Viem**: A TypeScript interface for Ethereum that provides low-level primitives.
-   **Material-UI (MUI)**: A popular React UI framework for building beautiful and responsive user interfaces.
-   **Framer Motion**: A library for production-ready motion and animation for React.
-   **Notistack**: A library for easily displaying snackbar notifications.
-   **i18next**: An internationalization framework for React applications.
-   **Pinata SDK**: Used indirectly via the `server` for IPFS pinning.

## Project Structure

-   `public/`: Static assets, including `Certificate.json` (ABI and bytecode of the deployed contract).
-   `src/`: Main application source code.
    -   `assets/`: Illustrations and other static assets.
    -   `components/`: Reusable React components (e.g., `ConnectWalletButton`, `Header`, `Upload`).
    -   `context/`: React Context providers (e.g., `PasswordContext`, `SettingsContext`).
    -   `ethereum/`: Wagmi configuration and Ethereum-related setup.
    -   `hooks/`: Custom React hooks (e.g., `usePinIpfs`).
    -   `locales/`: Internationalization files.
    -   `pages/`: Individual application pages (e.g., `HomePage`, `NewContract`, `IssueCertificate`, `VerifyCertificate`).
    -   `routes/`: React Router configuration.
    -   `theme/`: Material-UI theme configuration and overrides.
    -   `utils/`: Utility functions.

## Installation

To set up the client application, navigate to this directory and install its dependencies:

```bash
cd client
npm install
```

## Configuration

### Ethereum Network

The application is configured to connect to `localhost` (Hardhat Network) by default. You can modify the connected chains in `client/src/ethereum/index.tsx`:

```typescript
// client/src/ethereum/index.tsx

import { WagmiConfig, createConfig, configureChains } from 'wagmi'
import {
  polygonMumbai,
  localhost,
  sepolia
} from 'wagmi/chains'
import { InjectedConnector } from 'wagmi/connectors/injected'
import { publicProvider } from 'wagmi/providers/public'

const {
  publicClient,
  webSocketPublicClient,
  chains,
} = configureChains(
  [
    // Uncomment and add other chains as needed
    // sepolia,
    // polygonMumbai,
    localhost,
  ],
  [publicProvider()]
);

// ... rest of the file
```

### Smart Contract ABI and Address

The client application interacts with the deployed `Certificate.sol` smart contract. The ABI (Application Binary Interface) and deployed address are loaded from `client/public/Certificate.json`. This file is typically generated during the contract deployment process in the `contracts` project.

Ensure that `client/public/Certificate.json` is up-to-date with your deployed contract.

## Running the Application

To start the client application in development mode, navigate to the `client` directory and run:

```bash
npm run dev
```

This will compile the application and open it in your default web browser, usually at `http://localhost:5173`.

## Available Scripts

In the `client` directory, you can run:

-   `npm run dev`: Starts the development server.
-   `npm run build`: Builds the application for production to the `dist` folder.
-   `npm run lint`: Runs ESLint to check for code quality issues.
-   `npm run preview`: Serves the production build locally for previewing.

## Linting

The project uses ESLint for code linting. You can run the linter manually using:

```bash
npm run lint
```

For more details on the ESLint configuration, refer to `.eslintrc.cjs`.

## Internationalization (i18n)

The client application supports multiple languages using `i18next`. Language files are located in `src/locales/langs/`. You can add new languages or modify existing translations in these files.

## Theming

The application uses Material-UI for its UI components and theming. The theme configuration is located in the `src/theme` directory, allowing for easy customization of colors, typography, shadows, and component overrides.