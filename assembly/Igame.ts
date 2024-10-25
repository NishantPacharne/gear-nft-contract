import { System, Protobuf, StringBytes } from "@koinos/sdk-as";
import { common } from "@koinosbox/contracts";
import { koincrew } from "./proto/koincrew";



export class gameContract {
  _contractId: Uint8Array;

  /**
   * Create an instance of a KoinCrew contract
   * @example
   * ```ts
   *   const contract = new KoinCrew(Base58.decode("1DQzuCcTKacbs9GGScFTU1Hc8BsyARTPqe"));
   * ```
   */
  constructor(contractId: Uint8Array) {
    this._contractId = contractId;
  }


  /**
 * Get user data
 * @external
 * @readonly
 */
  gamedata_of(args: common.address): koincrew.gamedata {
    const argsBuffer = Protobuf.encode(args, common.address.encode);
    const callRes = System.call(this._contractId, 0x4a587025, argsBuffer);
    if (callRes.code != 0) {
      const errorMessage = `failed to call 'KoinCrew.gamedata_of': ${callRes.res.error && callRes.res.error!.message ? callRes.res.error!.message : "unknown error"}`;
      System.exit(callRes.code, StringBytes.stringToBytes(errorMessage));
    }
    if (!callRes.res.object) return new koincrew.gamedata();
    return Protobuf.decode<koincrew.gamedata>(callRes.res.object, koincrew.gamedata.decode);
  }


  /**
   * Set user data
   * @external
   */
  play_game(args: koincrew.gamedata_args): koincrew.gamedata {
    const argsBuffer = Protobuf.encode(args, koincrew.gamedata_args.encode);
    const callRes = System.call(this._contractId, 0xcc208775, argsBuffer);
    if (callRes.code != 0) {
      const errorMessage = `failed to call 'KoinCrew.play_game': ${callRes.res.error && callRes.res.error!.message ? callRes.res.error!.message : "unknown error"}`;
      System.exit(callRes.code, StringBytes.stringToBytes(errorMessage));
    }
    if (!callRes.res.object) return new koincrew.gamedata();
    return Protobuf.decode<koincrew.gamedata>(callRes.res.object, koincrew.gamedata.decode);
  }

    /**
   * Set user data
   * @external
   */
  send_nft(args: common.address): void {
    const argsBuffer = Protobuf.encode(args, common.address.encode);
    const callRes = System.call(this._contractId, 0x8addec93, argsBuffer);
    if (callRes.code != 0) {
      const errorMessage = `failed to call 'KoinCrew.send_nft': ${callRes.res.error && callRes.res.error!.message ? callRes.res.error!.message : "unknown error"}`;
      System.exit(callRes.code, StringBytes.stringToBytes(errorMessage));
    }
    return;
  }


  /**
   * Set user data
   * @external
   */
  claim_reward(args: koincrew.gamedata_args): void {
    const argsBuffer = Protobuf.encode(args, koincrew.gamedata_args.encode);
    const callRes = System.call(this._contractId, 0x7784fac6, argsBuffer);
    if (callRes.code != 0) {
      const errorMessage = `failed to call 'KoinCrew.claim_reward': ${callRes.res.error && callRes.res.error!.message ? callRes.res.error!.message : "unknown error"}`;
      System.exit(callRes.code, StringBytes.stringToBytes(errorMessage));
    }
    return;
  }
}
