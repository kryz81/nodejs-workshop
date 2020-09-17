import { Inject, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as lowdb from 'lowdb';
import * as FileSync from 'lowdb/adapters/FileSync';

@Injectable()
export class LowdbAdapter {
  private readonly db;

  constructor(private readonly configService: ConfigService) {
    this.db = lowdb(
      new FileSync(this.configService.get<string>('APP_DB_PATH')),
    );
    this.db.defaults({ employees: [] }).write();
  }

  async getRecords(
    collection: string,
    filterOptions: { [key: string]: any } = {},
  ) {
    return this.db.get(collection).filter(filterOptions);
  }

  async getRecordById(collection: string, recordId: string) {
    return this.db.get(collection).find({ id: recordId }).value();
  }

  async addRecord(collection: string, record: any) {
    return this.db.get(collection).push(record).write();
  }

  async updateRecord(collection: string, recordId: string, record: any) {
    return this.db
      .get(collection)
      .find({ id: recordId })
      .assign(record)
      .write();
  }

  async deleteRecord(collection: string, recordId: string) {
    return this.db.get(collection).remove({ id: collection }).write();
  }
}
