import { ApiProperty } from '@nestjs/swagger';

export class ChallengeUseCaseInputDTO {
  @ApiProperty()
  name: string;
}
export class ChallengeUseCaseOutputDTO {
  @ApiProperty()
  id: number;
}
