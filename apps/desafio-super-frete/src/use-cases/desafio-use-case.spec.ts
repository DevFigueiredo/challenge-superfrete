import { Test, TestingModule } from '@nestjs/testing';
import { DesafioUseCase } from './desafio-use-case';
import { MockProxy, mock } from 'jest-mock-extended';

describe('DesafioUseCase', () => {
  let sut: DesafioUseCase;
  const desafioUseCase: MockProxy<DesafioUseCase> = mock();

  beforeEach(async () => {
    const Desafio: TestingModule = await Test.createTestingModule({
      controllers: [],
      providers: [{ provide: DesafioUseCase, useValue: desafioUseCase }],
    }).compile();

    sut = Desafio.get<DesafioUseCase>(DesafioUseCase);
  });

  describe('DesafioUseCase - Tests', () => {
    it('should return "Hello World!"', () => {
      expect(sut.handle({ name: 'any_name' })).toBe('Hello World!');
    });
  });
});
