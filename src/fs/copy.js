import { cp } from 'node:fs/promises';

import { existsAsync, messages } from './helpers/index.mjs';

const { FS_OPERATION_FAILED } = messages;

const copy = async () => {
  const srcPath = './src/fs/files';
  const destPath = './src/fs/files_copy';

  if (!await existsAsync(srcPath)) {
    throw new Error(FS_OPERATION_FAILED);
  }

  try {
    await cp(srcPath, destPath, { recursive: true, errorOnExist: true, force: false });
  } catch (error) {
    if (error.code === 'ERR_FS_CP_EEXIST') {
      throw new Error(FS_OPERATION_FAILED);
    }
  }
};

await copy();
