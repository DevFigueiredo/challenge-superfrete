import { ChallengeRepository } from './challenge-repository';
import { Test, TestingModule } from '@nestjs/testing';
import { Firestore } from 'firebase-admin/firestore';
import { MockProxy, mock } from 'jest-mock-extended';

describe('ChallengeRepository', () => {
  let sut: ChallengeRepository;
  const firestoreMock: MockProxy<Firestore> = mock();

  beforeEach(async () => {
    jest.clearAllMocks();
    firestoreMock.collection.mockReturnValue({
      add: jest.fn(),
    } as any);

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ChallengeRepository,
        { provide: 'db', useValue: firestoreMock },
      ],
    }).compile();

    sut = module.get<ChallengeRepository>(ChallengeRepository);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('save', () => {
    it('should save data to Firestore collection', async () => {
      const data = { name: 'any_name' };

      await sut.save(data);

      expect(firestoreMock.collection).toHaveBeenCalledWith('challenge');
      expect(firestoreMock.collection('challenge')?.add).toHaveBeenCalledWith(
        data,
      );
    });
  });
});
