import { ChallengeModule } from 'apps/challenge/src/challenge.module';
import { createServer } from './shared/utils/create-server';
import { functionExport } from './shared/utils/function-export';
import { onChallengeCreate } from 'shared/triggers/challenge.trigger';

export const challenge_super_frete = functionExport(
  createServer(ChallengeModule),
);
export { onChallengeCreate };