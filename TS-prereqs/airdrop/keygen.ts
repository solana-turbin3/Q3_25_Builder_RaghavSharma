import { Keypair } from "@solana/web3.js";

// Now we're going to create a new Keypair, like so:
// Generate a new keypair
let kp = Keypair.generate(); 

// Fixed template literal syntax and closed properly
console.log(`You've generated a new Solana wallet: ${kp.publicKey.toBase58()}`);

// Fixed template literal for secret key output
console.log(`[${kp.secretKey}]`);