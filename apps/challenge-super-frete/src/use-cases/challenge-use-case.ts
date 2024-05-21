import { Injectable } from '@nestjs/common';
import {
  ChallengeUseCaseInputDTO,
  ChallengeUseCaseOutputDTO,
} from './challenge-use-case.dto';
import { challengeUseCaseInputSchema } from './challenge-use-case.schema';

@Injectable()
export class ChallengeUseCase {
  handle(params: ChallengeUseCaseInputDTO): ChallengeUseCaseOutputDTO {
    const data = challengeUseCaseInputSchema.parse(params);
    console.log(data);
    return {
      id: 1,
    };
  }
}
