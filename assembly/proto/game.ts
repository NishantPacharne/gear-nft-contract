import { Writer, Reader } from "as-proto";

export namespace game {
  export class str {
    static encode(message: str, writer: Writer): void {
      if (message.value.length != 0) {
        writer.uint32(10);
        writer.string(message.value);
      }
    }

    static decode(reader: Reader, length: i32): str {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new str();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.value = reader.string();
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    value: string;

    constructor(value: string = "") {
      this.value = value;
    }
  }

  @unmanaged
  export class uint32 {
    static encode(message: uint32, writer: Writer): void {
      if (message.value != 0) {
        writer.uint32(8);
        writer.uint32(message.value);
      }
    }

    static decode(reader: Reader, length: i32): uint32 {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new uint32();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.value = reader.uint32();
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    value: u32;

    constructor(value: u32 = 0) {
      this.value = value;
    }
  }

  @unmanaged
  export class uint64 {
    static encode(message: uint64, writer: Writer): void {
      if (message.value != 0) {
        writer.uint32(8);
        writer.uint64(message.value);
      }
    }

    static decode(reader: Reader, length: i32): uint64 {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new uint64();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.value = reader.uint64();
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    value: u64;

    constructor(value: u64 = 0) {
      this.value = value;
    }
  }

  export class address {
    static encode(message: address, writer: Writer): void {
      if (message.value.length != 0) {
        writer.uint32(10);
        writer.bytes(message.value);
      }
    }

    static decode(reader: Reader, length: i32): address {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new address();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.value = reader.bytes();
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    value: Uint8Array;

    constructor(value: Uint8Array = new Uint8Array(0)) {
      this.value = value;
    }
  }

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
  export class empty_object {
    static encode(message: empty_object, writer: Writer): void {}

    static decode(reader: Reader, length: i32): empty_object {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new empty_object();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    constructor() {}
  }

  @unmanaged
  export class gamedata {
    static encode(message: gamedata, writer: Writer): void {
      if (message.reward != 0) {
        writer.uint32(8);
        writer.uint64(message.reward);
      }
    }

    static decode(reader: Reader, length: i32): gamedata {
      const end: usize = length < 0 ? reader.end : reader.ptr + length;
      const message = new gamedata();

      while (reader.ptr < end) {
        const tag = reader.uint32();
        switch (tag >>> 3) {
          case 1:
            message.reward = reader.uint64();
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    reward: u64;

    constructor(reward: u64 = 0) {
      this.reward = reward;
    }
  }

  export class gamedata_args {
    static encode(message: gamedata_args, writer: Writer): void {
      if (message.account.length != 0) {
        writer.uint32(10);
        writer.bytes(message.account);
      }

      const unique_name_data = message.data;
      if (unique_name_data !== null) {
        writer.uint32(18);
        writer.fork();
        gamedata.encode(unique_name_data, writer);
        writer.ldelim();
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

          case 2:
            message.data = gamedata.decode(reader, reader.uint32());
            break;

          default:
            reader.skipType(tag & 7);
            break;
        }
      }

      return message;
    }

    account: Uint8Array;
    data: gamedata | null;

    constructor(
      account: Uint8Array = new Uint8Array(0),
      data: gamedata | null = null
    ) {
      this.account = account;
      this.data = data;
    }
  }
}
