import { Test, TestingModule } from '@nestjs/testing';
import { MockProxy, mock } from 'jest-mock-extended';
import { DesafioController } from './desafio.controller';
import { DesafioUseCase } from '../use-cases/desafio-use-case';

describe('DesafioController', () => {
  let sut: DesafioController;
  const desafioUseCase: MockProxy<DesafioUseCase> = mock();

  beforeEach(async () => {
    const Desafio: TestingModule = await Test.createTestingModule({
      controllers: [DesafioController],
      providers: [{ provide: DesafioUseCase, useValue: desafioUseCase }],
    }).compile();

    sut = Desafio.get<DesafioController>(DesafioController);
  });

  describe('DesafioController - Tests', () => {
    it('should return "Hello World!"', () => {
      expect(sut.save({ name: 'any_name' })).toBe('Hello World!');
    });
  });
});
