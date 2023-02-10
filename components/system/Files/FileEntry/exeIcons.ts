import type {
  IconGroupEntry,
  IconGroupItem,
  ResourceEntry,
} from "resedit/dist/resource";

const RESERVED = 0;
const ICON_TYPE = {
  CUR: 2,
  ICO: 1,
};

const createIconHeader = (iconCount: number): Uint8Array =>
  Uint8Array.from([
    RESERVED,
    RESERVED,
    ...new Uint8Array(Uint16Array.from([ICON_TYPE.ICO]).buffer),
    ...new Uint8Array(Uint16Array.from([iconCount]).buffer),
  ]);

const createIconDirEntry = (
  { bitCount, colors, dataSize, height, planes, width }: IconGroupItem,
  offset: number
): Uint8Array =>
  Uint8Array.from([
    width,
    bitCount === 32 && height === width * 2 ? width : height,
    colors,
    RESERVED,
    ...new Uint8Array(Uint16Array.from([planes]).buffer),
    ...new Uint8Array(Uint16Array.from([bitCount]).buffer),
    ...new Uint8Array(Uint32Array.from([dataSize]).buffer),
    ...new Uint8Array(Uint32Array.from([offset]).buffer),
  ]);

const ICONDIR_LENGTH = 6;
const ICONDIRENTRY_LENGTH = 16;
const RC_ICON = 3;
