import { access } from 'node:fs/promises';

const existsAsync = async (filePath) => {
  let fileExist = true;

  try {
    await access(filePath);
  } catch (error) {
    fileExist = false;
  }

  return fileExist;
};

export { existsAsync };
