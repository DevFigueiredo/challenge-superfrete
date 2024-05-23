import { Inject, Injectable } from '@nestjs/common';
import { Firestore } from 'firebase-admin/firestore';
import { IChallengeRepository } from './interfaces/challenge-repository-interface';
@Injectable()
export class ChallengeRepository implements IChallengeRepository.Repository {
  constructor(@Inject('db') private readonly db: Firestore) {}

  async save(
    data: IChallengeRepository.ISaveInput,
  ): Promise<IChallengeRepository.ISaveOutput> {
    await this.db.collection('challenge').add(data);
    return { id: 1 };
  }
}
