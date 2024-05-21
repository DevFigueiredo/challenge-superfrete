import { ApiProperty } from '@nestjs/swagger';

export class DesafioUseCaseInputDTO {
  @ApiProperty()
  name: string;
}
export class DesafioUseCaseOutputDTO {
  @ApiProperty()
  id: number;
}
