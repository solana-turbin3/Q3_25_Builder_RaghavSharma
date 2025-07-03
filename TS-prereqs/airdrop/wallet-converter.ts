import bs58 from "bs58";

function base58ToWallet(base58PrivateKey: string): number[] {
  try {
    const decoded = bs58.decode(base58PrivateKey);
    return Array.from(decoded);
  } catch (error) {
    throw new Error(`Invalid base58 private key: ${error}`);
  }
}

function walletToBase58(walletArray: number[]): string {
  try {
    const uint8Array = new Uint8Array(walletArray);
    return bs58.encode(uint8Array);
  } catch (error) {
    throw new Error(`Invalid wallet: ${error}`);
  }
}

console.log(base58ToWallet(""));

//export { base58ToWallet, walletToBase58 };
