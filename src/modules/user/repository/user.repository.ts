import { Injectable } from '@nestjs/common';
import { queryBuilder } from 'src/common/queryBuilder';
import { PGService } from 'src/modules/pg/pg.service';
import { RegisterDto, UserConfedentialDto } from '../dto';
import getuser from '../sql/getuser';
import registeruser from '../sql/registeruser';
import { UserTransformer } from '../transformer/user.transformer';



@Injectable()
export class UserRepository {

  constructor(private dbService: PGService) { }

  async findUserByEmail(email:string):Promise<UserConfedentialDto> {
    const data = await this.dbService.getById(queryBuilder(getuser, { email }), null);
    return  UserTransformer.toUserWithHash(data);
  }

  async registerUser(data: RegisterDto) {
    const result = this.dbService.create(
      queryBuilder(registeruser, data
      )
      , null);
    return result;
  }

}
