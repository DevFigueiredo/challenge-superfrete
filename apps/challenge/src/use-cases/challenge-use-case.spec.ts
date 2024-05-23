import { ChallengeUseCase } from './challenge-use-case';
import { ChallengeRepository } from '../infra/repositories/challenge-repository';
import { ChallengeUseCaseInputDTO } from './challenge-use-case.dto';
import { MockProxy, mock } from 'jest-mock-extended';
import { Test, TestingModule } from '@nestjs/testing';

describe('ChallengeUseCase', () => {
  let sut: ChallengeUseCase;
  const challengeRepositoryMock: MockProxy<ChallengeRepository> = mock();

  beforeEach(async () => {
    jest.clearAllMocks();
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ChallengeUseCase,
        { provide: ChallengeRepository, useValue: challengeRepositoryMock },
      ],
    }).compile();

    sut = module.get<ChallengeUseCase>(ChallengeUseCase);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('handle', () => {
    it('should save data to repository with generated UID', async () => {
      const params: ChallengeUseCaseInputDTO = { name: 'any_name' };

      const result = await sut.handle(params);

      expect(challengeRepositoryMock.save).toHaveBeenCalledWith({
        ...params,
        uid: expect.anything(),
      });
      expect(result).toEqual({ uid: expect.anything() });
    });

    it('should throw an error if input is invalid', async () => {
      const params = {} as ChallengeUseCaseInputDTO; // Invalid input

      await expect(sut.handle(params)).rejects.toThrow();
      expect(challengeRepositoryMock.save).not.toHaveBeenCalled();
    });
  });
});
