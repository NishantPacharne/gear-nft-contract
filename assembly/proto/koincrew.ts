import { Writer, Reader } from "as-proto";

export namespace koincrew {
  @unmanaged
  export class boole {
    static encode(message: boole, writer: Writer): void {
      if (message.value != false) {
        writer.uint32(8);
        writer.bool(message.value);
      }
    }

    static decode(reader: Reader, length: i32): boole {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new boole();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.value = reader.bool();
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    value: bool;

    constructor(value: bool = false) {
      this.value = value;
    }
  }

  @unmanaged
  export class gamedata {
    static encode(message: gamedata, writer: Writer): void {
      if (message.claimed != false) {
        writer.uint32(8);
        writer.bool(message.claimed);
      }

      if (message.reward != 0) {
        writer.uint32(16);
        writer.uint64(message.reward);
      }

      if (message.freegame != false) {
        writer.uint32(24);
        writer.bool(message.freegame);
      }
    }

    static decode(reader: Reader, length: i32): gamedata {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new gamedata();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.claimed = reader.bool();
            break;

          case 2:
            message.reward = reader.uint64();
            break;

          case 3:
            message.freegame = reader.bool();
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    claimed: bool;
    reward: u64;
    freegame: bool;

    constructor(
      claimed: bool = false,
      reward: u64 = 0,
      freegame: bool = false
    ) {
      this.claimed = claimed;
      this.reward = reward;
      this.freegame = freegame;
    }
  }

  export class gamedata_args {
    static encode(message: gamedata_args, writer: Writer): void {
      if (message.account.length != 0) {
        writer.uint32(10);
        writer.bytes(message.account);
      }
    }

    static decode(reader: Reader, length: i32): gamedata_args {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new gamedata_args();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.account = reader.bytes();
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    account: Uint8Array;

    constructor(account: Uint8Array = new Uint8Array(0)) {
      this.account = account;
    }
  }
}
