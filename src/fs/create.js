import { access, writeFile } from 'node:fs/promises';

const ifFileExists = async (filePath) => {
  let fileExist = true;

  try {
    await access(filePath);
  } catch (error) {
    fileExist = false;
  }

  return fileExist;
};

const create = async () => {
  const filePath = './files/fresh.txt';

  if (await ifFileExists(filePath)) {
    throw new Error('FS operation failed');
  }

  await writeFile(filePath, 'I am fresh and young');
};

await create();
