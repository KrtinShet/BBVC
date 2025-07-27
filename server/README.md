# Server

This directory contains the Node.js Express server responsible for handling IPFS pinning operations using the Pinata API.

## Purpose

The server acts as an intermediary between the client application and the Pinata IPFS service. It exposes an endpoint (`/ipfs/pin`) that the client can use to upload files, which are then securely pinned to IPFS via Pinata.

## Installation

To set up the server, navigate to this directory and install its dependencies:

```bash
cd server
npm install
```

## Configuration

Before running the server, you need to configure your Pinata API keys. These keys are essential for authenticating with the Pinata service and performing IPFS pinning.

1.  **Obtain Pinata API Keys:** If you don't already have them, sign up for a Pinata account and generate your API Key and Secret API Key from your Pinata dashboard.

2.  **Create `.env` file:** In the `server` directory, create a new file named `.env`.

3.  **Add API Keys:** Add the following lines to your `.env` file, replacing the placeholder values with your actual Pinata keys:

    ```
    PINATA_API_KEY=your_pinata_api_key
    PINATA_SECRET_API_KEY=your_pinata_secret_api_key
    ```

## Running the Server

To start the IPFS pinning server, navigate to the `server` directory and run:

```bash
npm start
```

The server will start listening on port `3000`.

## API Endpoints

### `POST /ipfs/pin`

-   **Description:** Uploads one or more files to IPFS via Pinata.
-   **Method:** `POST`
-   **Content-Type:** `multipart/form-data`
-   **Request Body:**
    -   `files`: One or more file fields containing the files to be pinned.
-   **Response:** An array of objects, where each object contains the original filename as a key and the corresponding IPFS CID (Content Identifier) as its value.

    ```json
    [
      {
        "your_file_name.pdf": "Qm..."
      },
      {
        "another_file.jpg": "Qm..."
      }
    ]
    ```
