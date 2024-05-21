import { Test, TestingModule } from '@nestjs/testing';
import { ChallengeUseCase } from './challenge-use-case';
import { MockProxy, mock } from 'jest-mock-extended';

describe('ChallengeUseCase', () => {
  let sut: ChallengeUseCase;
  const challengeUseCase: MockProxy<ChallengeUseCase> = mock();

  beforeEach(async () => {
    const Challenge: TestingModule = await Test.createTestingModule({
      controllers: [],
      providers: [{ provide: ChallengeUseCase, useValue: challengeUseCase }],
    }).compile();

    sut = Challenge.get<ChallengeUseCase>(ChallengeUseCase);
  });

  describe('ChallengeUseCase - Tests', () => {
    it('should return "Hello World!"', () => {
      expect(sut.handle({ name: 'any_name' })).toBe('Hello World!');
    });
  });
});
