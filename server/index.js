import express from 'express';
import pinataSDK from '@pinata/sdk';
import multer from 'multer';
import { Readable } from 'stream';
import cors from 'cors';

const storage = multer.memoryStorage()
const upload = multer({ dest: 'uploads/', storage })

const pinata = new pinataSDK({
  pinataApiKey: process.env.PINATA_API_KEY,
  pinataSecretApiKey: process.env.PINATA_SECRET_API_KEY,
})

const app = express();
app.use(express.json());
app.use(cors({
  origin: '*', // allow to server to accept request from different origin
  "Access-Control-Allow-Origin": "*", // allow to server to accept request from different origin
}));
app.use(express.urlencoded({ extended: true }));
app.use(upload.array("files", 20));
app.post('/ipfs/pin', async (req, res) => {
  const files = req.files;

  const ipfs_cids = [];
  let ipfs_promises = [];

  for (let f of files) {
    const stream = Readable.from(f.buffer);
    ipfs_promises.push(pinata.pinFileToIPFS(stream, {
      pinataMetadata: {
        name: f.originalname
      }
    }));
  }

  const ipfs_results = await Promise.all(ipfs_promises);

  for (let i = 0; i < ipfs_results.length; i++) {
    ipfs_cids.push({
      [files[i].originalname]: ipfs_results[i].IpfsHash
    })
  }
  console.log(`${ipfs_cids.length} file/s pinned to IPFS`);
  res.send(ipfs_cids);

});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});