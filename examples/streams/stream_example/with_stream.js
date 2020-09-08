const fs = require('fs');
const zlib = require('zlib');
const { pipeline } = require('stream');
const { promisify } = require('util');

const sourceFile = `${__dirname}/../big_file_example/big.file`;
const targetFile = `${__dirname}/compressed.zip`;

async function store() {
  const readSource = fs.createReadStream(sourceFile);
  const zipData = zlib.createGzip();
  const writeData = fs.createWriteStream(targetFile);

  // readSource -> [pipe] --> zipData --> [pipe] --> writeData

  const pipelinePromise = promisify(pipeline);

  try {
    const result = await pipelinePromise(readSource, zipData, writeData);
  } catch (e) {
    console.log(e.message);
  }
}

store();
