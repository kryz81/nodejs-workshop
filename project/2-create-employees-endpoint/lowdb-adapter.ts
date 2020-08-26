import * as lowdb from 'lowdb';
import FileSync from 'lowdb/adapters/FileSync';

@Injectable()
export class LowdbAdapter {
  private readonly db;

  constructor() {
    this.db = lowdb(new FileSync('db.json'));
  }
}
