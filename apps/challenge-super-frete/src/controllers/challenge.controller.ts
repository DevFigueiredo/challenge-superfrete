import { Body, Controller, Post } from '@nestjs/common';
import { ChallengeUseCase } from '../use-cases/challenge-use-case';
import {
  ChallengeUseCaseInputDTO,
  ChallengeUseCaseOutputDTO,
} from '../use-cases/challenge-use-case.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('ChallengeSuperFrete')
@Controller()
export class ChallengeController {
  constructor(private readonly challengeUseCase: ChallengeUseCase) {}
  @ApiResponse({
    description: 'Challenge criado!',
    type: ChallengeUseCaseOutputDTO,
  })
  @Post()
  save(@Body() body: ChallengeUseCaseInputDTO): ChallengeUseCaseOutputDTO {
    return this.challengeUseCase.handle(body);
  }
}