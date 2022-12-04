import { cp } from 'node:fs/promises';

import { existsAsync } from './helpers/existsAsync.js';

const copy = async () => {
  const srcPath = './src/fs/files';
  const destPath = './src/fs/files_copy';

  if (!await existsAsync(srcPath)) {
    throw new Error('FS operation failed');
  }

  try {
    await cp(srcPath, destPath, { recursive: true, errorOnExist: true, force: false });
  } catch (error) {
    if (error.code === 'ERR_FS_CP_EEXIST') {
      throw new Error('FS operation failed');
    }
  }

};

await copy();
