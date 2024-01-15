export type ServerList = ReturnType<typeof serverListBuilder>;

const KEY = [
  0xc1, 0xb6, 0xc0, 0xcc, 0xc0, 0xd3, 0xc6, 0xd1, 0xc6, 0xae, 0xbe, 0xcf, 0xc8, 0xa3, 0xc8, 0xad, 0xc0, 0xdb, 0xbe, 0xf7, 0xc0, 0xbb, 0xc0, 0xa7,
  0xc7, 0xd1, 0xbd, 0xba, 0xc5, 0xa9, 0xb8, 0xb3, 0xc6, 0xae, 0xc0, 0xd4, 0xb4, 0xcf, 0xb4, 0xd9, 0xb8, 0xb8, 0xc7, 0xd1, 0xb1, 0xdb, 0xb7, 0xce,
  0xbe, 0xcf, 0xc8, 0xad, 0xc8, 0xad, 0xc7, 0xd2, 0xc1, 0xd9, 0xa4, 0xbb, 0xa4, 0xbb, 0x00,
];

const decode = (buffer: Buffer) => {
  const keyLength = KEY.length;
  for (let i = 0; i < 10; ++i) {
    for (let j = 0; j < 11; ++j) {
      for (let k = 64 - keyLength; k < 64; ++k) {
        buffer[704 * i + 64 * j + k] -= KEY[63 - k]!;
      }
    }
  }
};

const serverListBuilder = (buf: Buffer) => {
  decode(buf.subarray(4));

  return {
    key: buf.readUInt32LE(0),

    servers: new Array(10).fill(null).map((_, i) => {
      const start = 4 + i * 64 * 11;
      const end = (i + 1) * 64 * 11;

      const serverBuf = buf.subarray(start, end);

      return {
        url: serverBuf.toString("latin1", 0, 64).replaceAll("\0", ""),

        channels: new Array(10).fill(null).map((_, j) => {
          const channelBuf = serverBuf.subarray(64 + j * 64, 64 + (j + 1) * 64);

          return channelBuf.toString("latin1", 0, 64).replaceAll("\0", "");
        }),
      };
    }),
  };
};

export default serverListBuilder;
