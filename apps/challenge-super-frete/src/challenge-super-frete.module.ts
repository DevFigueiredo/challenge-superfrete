import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import configuration from 'shared/config/configuration';
import { Logger } from 'shared/utils/logger';
import { ChallengeController } from './controllers/challenge.controller';
import { ChallengeUseCase } from './use-cases/challenge-use-case';
import { database } from 'shared/utils/database';
import { ChallengeRepository } from './infra/repositories/challenge-repository';
@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
    }),
  ],
  controllers: [ChallengeController],
  providers: [
    ChallengeUseCase,
    ChallengeRepository,
    Logger,
    {
      provide: 'db',
      useFactory: () => {
        return database;
      },
    },
  ],
})
export class ChallengeSuperFreteModule {}
