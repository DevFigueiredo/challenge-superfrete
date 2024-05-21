import { Test, TestingModule } from '@nestjs/testing';
import { MockProxy, mock } from 'jest-mock-extended';
import { ChallengeController } from './challenge.controller';
import { ChallengeUseCase } from '../use-cases/challenge-use-case';

describe('ChallengeController', () => {
  let sut: ChallengeController;
  const challengeUseCase: MockProxy<ChallengeUseCase> = mock();

  beforeEach(async () => {
    const Challenge: TestingModule = await Test.createTestingModule({
      controllers: [ChallengeController],
      providers: [{ provide: ChallengeUseCase, useValue: challengeUseCase }],
    }).compile();

    sut = Challenge.get<ChallengeController>(ChallengeController);
  });

  describe('ChallengeController - Tests', () => {
    it('should return "Hello World!"', () => {
      expect(sut.save({ name: 'any_name' })).toBe('Hello World!');
    });
  });
});
