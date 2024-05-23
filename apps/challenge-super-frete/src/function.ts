import { createServer } from '../../../shared/utils/create-server';
import { functionExport } from '../../../shared/utils/function-export';
import { ChallengeSuperFreteModule } from './challenge-super-frete.module';
import { onChallengeCreate } from 'shared/triggers/challenge-super-frete.trigger';

export const challenge_super_frete = functionExport(
  createServer(ChallengeSuperFreteModule),
);
export { onChallengeCreate };
