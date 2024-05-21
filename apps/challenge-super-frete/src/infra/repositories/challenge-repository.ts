import { Inject } from '@nestjs/common';
import { Firestore } from 'firebase-admin/firestore';
namespace IChallengeRepository {
  export type ISaveInput = {
    name: string;
  };
  export type ISaveOutput = {
    id: number;
  };
  export type Repository = {
    save(data: ISaveInput): Promise<ISaveOutput>;
  };
}

export class ChallengeRepository implements IChallengeRepository.Repository {
  constructor(@Inject('db') private readonly db: Firestore) {}

  async save(
    data: IChallengeRepository.ISaveInput,
  ): Promise<IChallengeRepository.ISaveOutput> {
    await this.db.collection('challenge').add(data);
    return { id: 1 };
  }
}
