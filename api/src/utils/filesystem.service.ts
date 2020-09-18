import { promises as fs } from 'fs';
import { Injectable } from '@nestjs/common';

@Injectable()
export class FileSystemService {
  async write(file: string, content: string) {
    return fs.writeFile(file, content);
  }
}
