import { ForbiddenException, Injectable } from '@nestjs/common';
import { Pool } from 'pg';

interface IPGService{
  

}
@Injectable()
export class PGService implements IPGService {
  private pool: Pool;
  constructor() {
    this.pool = new Pool({
      user: 'postgres',
      host: 'localhost',
      database: 'poc-db',
      password: '123admin',
      port: 5432,
    })
  }

  async getById(query: string, id) {
    try {
      const queryRes = await this.pool.query(query, id);
      const [data] = queryRes.rows;
      return data;
    }
    catch (e) {
      throw new ForbiddenException(e)
    }
  }

  async create(query:string,params:string[]){
    try {
      const queryRes = await this.pool.query(query, params);
      const [data] = queryRes.rows;
      return data;
    }
    catch (e) {
      throw new ForbiddenException(e)
    }

  }

  async update(){

  }

}
