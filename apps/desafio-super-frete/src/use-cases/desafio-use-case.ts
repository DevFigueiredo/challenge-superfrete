import { Injectable } from '@nestjs/common';
import {
  DesafioUseCaseInputDTO,
  DesafioUseCaseOutputDTO,
} from './desafio-use-case.dto';
import { desafioUseCaseInputSchema } from './desafio-use-case.schema';

@Injectable()
export class DesafioUseCase {
  handle(params: DesafioUseCaseInputDTO): DesafioUseCaseOutputDTO {
    const data = desafioUseCaseInputSchema.parse(params);
    console.log(data);
    return {
      id: 1,
    };
  }
}
