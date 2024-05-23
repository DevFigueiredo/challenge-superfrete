import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { ChallengeUseCase } from '../use-cases/challenge-use-case';
import {
  ChallengeUseCaseInputDTO,
  ChallengeUseCaseOutputDTO,
} from '../use-cases/challenge-use-case.dto';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

@ApiTags('Challenge')
@Controller()
export class ChallengeController {
  constructor(private readonly challengeUseCase: ChallengeUseCase) {}
  @ApiResponse({
    description: 'Challenge criado!',
    type: ChallengeUseCaseOutputDTO,
  })
  @ApiBadRequestResponse({
    description: 'BadRequest',
    schema: {
      example: {
        statusCode: 400,
        message: 'Field name must contain at least 1 character.',
        path: '/challenge',
      },
    },
  })
  @ApiCreatedResponse({
    description: 'Created',
    schema: {
      example: {
        uid: 'any_uid',
      },
    },
  })
  @HttpCode(201)
  @Post('challenge')
  save(
    @Body() body: ChallengeUseCaseInputDTO,
  ): Promise<ChallengeUseCaseOutputDTO> {
    return this.challengeUseCase.handle(body);
  }
}
