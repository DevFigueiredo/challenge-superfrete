import { Module } from '@nestjs/common';
import { DesafioController } from './controllers/desafio.controller';
import { DesafioUseCase } from './use-cases/desafio-use-case';
import { ConfigModule } from '@nestjs/config';
import configuration from 'shared/config/configuration';
import { Logger } from 'shared/utils/logger';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
    }),
  ],
  controllers: [DesafioController],
  providers: [DesafioUseCase, Logger],
})
export class DesafioSuperFreteModule {}
