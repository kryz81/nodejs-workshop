import { Injectable } from '@nestjs/common';
import { promises as fs, watch } from 'fs';

@Injectable()
export class FileSystemService {
  save(file: string, content: string) {
    return fs.writeFile(file, content);
  }

  read(file: string) {
    return fs.readFile(file);
  }

  watch(dir: string) {
    return watch(dir);
  }

  deleteFile(file: string) {
    return fs.unlink(file);
  }
}
