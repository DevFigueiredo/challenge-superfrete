import { Body, Controller, Post } from '@nestjs/common';
import { DesafioUseCase } from '../use-cases/desafio-use-case';
import {
  DesafioUseCaseInputDTO,
  DesafioUseCaseOutputDTO,
} from '../use-cases/desafio-use-case.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('DesafioSuperFrete')
@Controller()
export class DesafioController {
  constructor(private readonly desafioUseCase: DesafioUseCase) {}
  @ApiResponse({
    description: 'Desafio criado!',
    type: DesafioUseCaseOutputDTO,
  })
  @Post()
  save(@Body() body: DesafioUseCaseInputDTO): DesafioUseCaseOutputDTO {
    return this.desafioUseCase.handle(body);
  }
}
