import { writeFile } from 'node:fs/promises';

import { existsAsync, messages } from './helpers/index.mjs';

const { FS_OPERATION_FAILED } = messages;

const create = async () => {
  const filePath = './src/fs/files/fresh.txt';

  if (await existsAsync(filePath)) {
    throw new Error(FS_OPERATION_FAILED);
  }

  await writeFile(filePath, 'I am fresh and young');
};

await create();
