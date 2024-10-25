import { Base58 } from "@koinos/sdk-as";

export namespace Constants {
  export const NAME: string = "Helmets";
  export const SYMBOL: string = "HMT";
  export const MINT_PRICE: u64 = 0;
  export const MINT_FEE: bool = true;
  export const MAX_SUPPLY: u64 = 100000000000;
  export const URI: string = "https://stingy-silver-mule.myfilebase.com/ipfs/QmYbEVghVyqk2N2Wzvx3ojGFjHTxN9CHcJdYcRwFH4pU25/";
  export const OWNER: Uint8Array = Base58.decode("1NPvJuEDhjLuW3VbGqAQe4MdSWSB3YWxK1");

  // token mint
  export const TOKEN_PAY: Uint8Array = Base58.decode("1FaSvLjQJsCJKq5ybmGsMMQs8RQYyVv8ju");
  export const ADDRESS_PAY: Uint8Array = Base58.decode("1NPvJuEDhjLuW3VbGqAQe4MdSWSB3YWxK1");
}