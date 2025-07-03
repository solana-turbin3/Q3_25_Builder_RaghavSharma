import { Connection, Keypair, LAMPORTS_PER_SOL } from "@solana/web3.js";

// SECURITY NOTE: Replace with your actual wallet file path
// Example: import wallet from "./your-wallet.json";
// DO NOT commit files with actual wallet imports to git!

// const keypair = Keypair.fromSecretKey(new Uint8Array(wallet));

const connection = new Connection("https://api.devnet.solana.com");

(async () => {
  try {
    // Uncomment and modify after importing your wallet
    /*
    const txhash = await connection.requestAirdrop(
      keypair.publicKey,
      2 * LAMPORTS_PER_SOL
    );

    console.log(`Success! Check out your TX here:
https://explorer.solana.com/tx/${txhash}?cluster=devnet`);
    */
    console.log("Please import your wallet file first!");
  } catch (e) {
    console.error(`Oops, something went wrong: ${e}`);
  }
})();
