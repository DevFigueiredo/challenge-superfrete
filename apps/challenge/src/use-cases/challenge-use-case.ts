import { Injectable } from '@nestjs/common';
import {
  ChallengeUseCaseInputDTO,
  ChallengeUseCaseOutputDTO,
} from './challenge-use-case.dto';
import { challengeUseCaseInputSchema } from './challenge-use-case.schema';
import { ChallengeRepository } from '../infra/repositories/challenge-repository';
import { generateUUID } from 'shared/utils/generate-uuid';

@Injectable()
export class ChallengeUseCase {
  constructor(private readonly challengeRepository: ChallengeRepository) {}

  async handle(
    params: ChallengeUseCaseInputDTO,
  ): Promise<ChallengeUseCaseOutputDTO> {
    const uid = generateUUID();
    const data = challengeUseCaseInputSchema.parse(params);
    await this.challengeRepository.save({ ...data, uid });
    return {
      uid,
    };
  }
}
