import * as Busboy from 'busboy';
import { pipeline } from 'stream';
import { Injectable, NotFoundException } from '@nestjs/common';
import { promises as fs, createReadStream, createWriteStream } from 'fs';
import { GenerateIdService } from '../utils/generateid.service';

const PATH_DATA = `${__dirname}/../../data`;

@Injectable()
export class DocumentsService {
  constructor(private readonly generateIdService: GenerateIdService) {}

  upload(employeeId: string, req) {
    const busboy = new Busboy({ headers: req.headers });
    req.pipe(busboy);

    busboy.on('file', function (fieldname, file, filename, encoding, mimetype) {
      const writeStream = createWriteStream(
        `${PATH_DATA}/${employeeId}-${filename}`,
      );
      file.pipe(writeStream);
    });
  }

  async download(documentId: string) {
    const documentPath = `${PATH_DATA}/${documentId}`;

    try {
      await fs.access(documentPath);
      return createReadStream(documentPath);
    } catch (e) {
      throw new NotFoundException('Invalid document id');
    }
  }
}
