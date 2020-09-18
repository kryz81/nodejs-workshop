import { Injectable } from '@nestjs/common';
import * as lowdb from 'lowdb';
import * as FileSync from 'lowdb/adapters/FileSync';
import { APP_DB_PATH } from '../config';

@Injectable()
export class LowdbAdapter {
  private readonly db;

  constructor() {
    this.db = lowdb(new FileSync(APP_DB_PATH));
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
    const result = await this.db.get(collection).push(record).write();
    return this.getRecordById(collection, record['id']);
  }

  async updateRecord(collection: string, recordId: string, record: any) {
    await this.db.get(collection).find({ id: recordId }).assign(record).write();
  }

  async deleteRecord(collection: string, recordId: string) {
    return this.db.get(collection).remove({ id: collection }).write();
  }

  async cleanCollection(collection: string) {
    this.db.__wrapped__[collection] = [];
  }
}
