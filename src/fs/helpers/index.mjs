import { access } from 'node:fs/promises';

const messages = {
  FS_OPERATION_FAILED: 'FS operation failed',
};

const existsAsync = async (filePath) => {
  let fileExist = true;

  try {
    await access(filePath);
  } catch (error) {
    fileExist = false;
  }

  return fileExist;
};

export { messages, existsAsync };
