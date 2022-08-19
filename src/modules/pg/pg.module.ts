import { Global, Module } from '@nestjs/common';
import { PGService } from './pg.service';

@Global()
@Module({
  providers: [PGService],
  exports:[PGService]
})
export class PGModule {
  
}
