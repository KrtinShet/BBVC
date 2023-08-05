import { Box, Container, Button, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import {
  Hash,
  TransactionReceipt,
} from 'viem';

import Header from '../../Components/Header';
import { useAccount, useWalletClient, usePublicClient } from 'wagmi';



const getContractJson = async () => {
  const req = await fetch('/Certificate.json');
  let CertificateJson = await req.json();
  return CertificateJson;
}


const NewContract: React.FC<{}> = () => {
  const [name, setName] = useState<string | null>();
  const [symbol, setSymbol] = useState<string | null>();
  const [hash, setHash] = useState<Hash>();
  const [receipt, setReceipt] = useState<TransactionReceipt>();

  const { address } = useAccount();
  const { data: walletClient } = useWalletClient();
  const publicClient = usePublicClient();


  const _dplyContract = async () => {
    const contractJson = await getContractJson();
    const _hash = await walletClient?.deployContract({
      abi: contractJson.abi,
      bytecode: contractJson.bytecode,
      args: [name, symbol],
      account: address,
    });
    setHash(_hash);
  }



  useEffect(() => {
    ; (async () => {
      if (hash) {
        const receipt = await publicClient.waitForTransactionReceipt({ hash })
        setReceipt(receipt)
      }
    })()
  }, [hash])
  // const dplyContract = useCallback(_dplyContract, [address, name, symbol]);

  return (
    <Box>
      <Header title="New Contract" />
      <Container>
        <Typography variant="h1">Deploy a new Certificate Contract!!</Typography>
        <Box display={"flex"} flexDirection={"column"} maxWidth={"500px"} justifyContent={"space-between"}>
          <TextField
            label="Contract Name"
            variant="outlined"
            placeholder='Dr. Ambedkar Institue of Technology'
            sx={{ mb: 2 }}
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <TextField
            label="Contract Symbol"
            variant="outlined"
            placeholder="DRAIT"
            sx={{ mb: 2 }}
            value={symbol}
            onChange={e => setSymbol(e.target.value)}
          />
          <Button
            variant='contained'
            onClick={_dplyContract}
            disabled={!address || !name || !symbol}
          >
            Deploy Contract
          </Button>
        </Box>
        <Box>
          <h2>Transaction Hash: {hash?.toString()}</h2>
          <h2>Contract Hash: {receipt?.contractAddress?.toString()}</h2>
        </Box>
      </Container>
    </Box >
  );
}

export default NewContract;