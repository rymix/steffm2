export const DEFAULT_LOCALE = "en-GB";

export const MILLISECONDS_IN_SECOND = 1000;

export const TRANSITIONS_IN_MILLISECONDS = {
  DOUBLE_CLICK: 500,
  LONG_PRESS: 500,
  START_MENU: 400,
  WINDOW: 250,
};
export const TIFF_IMAGE_FORMATS = new Set([
  ".cr2",
  ".dng",
  ".nef",
  ".tif",
  ".tiff",
]);

export const IMAGE_FILE_EXTENSIONS = new Set([
  ...TIFF_IMAGE_FORMATS,
  ".ani",
  ".apng",
  ".avif",
  ".bmp",
  ".cur",
  ".gif",
  ".ico",
  ".jfif",
  ".jif",
  ".jpe",
  ".jpeg",
  ".jpg",
  ".pjp",
  ".pjpeg",
  ".png",
  ".svg",
  ".webp",
  ".xbm",
]);

export const EDITABLE_IMAGE_FILE_EXTENSIONS = new Set([
  ".bmp",
  ".gif",
  ".ico",
  ".jfif",
  ".jpe",
  ".jpeg",
  ".jpg",
  ".png",
  ".tif",
  ".tiff",
  ".webp",
]);

export const AUDIO_FILE_EXTENSIONS = new Set([".aac", ".oga", ".wav"]);

export const AUDIO_PLAYLIST_EXTENSIONS = new Set([".asx", ".m3u", ".pls"]);

export const VIDEO_FILE_EXTENSIONS = new Set([
  ".m4v",
  ".mkv",
  ".mov",
  ".mp4",
  ".ogg",
  ".ogm",
  ".ogv",
  ".webm",
]);

export const DYNAMIC_EXTENSION = new Set([
  ...AUDIO_FILE_EXTENSIONS,
  ...IMAGE_FILE_EXTENSIONS,
  ...TIFF_IMAGE_FORMATS,
  ...VIDEO_FILE_EXTENSIONS,
  ".ani",
  ".exe",
  ".mp3",
  ".sav",
  ".whtml",
]);
