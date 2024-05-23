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
    it('should save data in useCase and generate response UID', async () => {
      jest
        .spyOn(challengeUseCase, 'handle')
        .mockResolvedValue({ uid: 'any_uid' });
      const requestBody = { name: 'any_name' };

      const response = await sut.save(requestBody);

      expect(response).toEqual({ uid: 'any_uid' });
      expect(challengeUseCase.handle).toHaveBeenCalledWith(requestBody);
      expect(challengeUseCase.handle).toHaveBeenCalledTimes(1);
    });
  });
});
