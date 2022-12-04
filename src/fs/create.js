import { writeFile } from 'node:fs/promises';

import { existsAsync } from './helpers/existsAsync.js';

const create = async () => {
  const filePath = './files/fresh.txt';

  if (await existsAsync(filePath)) {
    throw new Error('FS operation failed');
  }

  await writeFile(filePath, 'I am fresh and young');
};

await create();
