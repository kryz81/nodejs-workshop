const fs = require('fs/promises');
const zlib = require('zlib');
const { promisify } = require('util');

const sourceFile = `${__dirname}/../big_file_example/big.file`;
const targetFile = `${__dirname}/compressed.zip`;

async function store() {
  try {
    // read file data
    const data = await fs.readFile(sourceFile);

    // compress data
    const gzip = promisify(zlib.gzip);
    const compressedData = await gzip(data);

    // write data to file
    await fs.writeFile(targetFile, compressedData);
  } catch (e) {
    console.log(e.message);
  }
}

run();
