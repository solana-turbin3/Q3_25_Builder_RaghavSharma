import {
  Transaction,
  SystemProgram,
  Connection,
  Keypair,
  LAMPORTS_PER_SOL,
  sendAndConfirmTransaction,
  PublicKey,
} from "@solana/web3.js";

// SECURITY NOTE: Replace with your actual wallet file path
// Example: import wallet from "./your-wallet.json";
// DO NOT commit files with actual wallet imports to git!

// const from = Keypair.fromSecretKey(new Uint8Array(wallet));

// Define your target public key
const to = new PublicKey("YOUR_TARGET_PUBLIC_KEY_HERE");

const connection = new Connection("https://api.devnet.solana.com");

(async () => {
  try {
    // Uncomment and modify after importing your wallet
    /*
    const transaction = new Transaction().add(
      SystemProgram.transfer({
        fromPubkey: from.publicKey,
        toPubkey: to,
        lamports: LAMPORTS_PER_SOL / 100, // 0.01 SOL
      })
    );

    const signature = await sendAndConfirmTransaction(
      connection,
      transaction,
      [from]
    );

    console.log(`Success! Check out your TX here:
https://explorer.solana.com/tx/${signature}?cluster=devnet`);
    */
    console.log("Please import your wallet file first!");
  } catch (e) {
    console.error(`Oops, something went wrong: ${e}`);
  }
})();
