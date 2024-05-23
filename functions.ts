import { ChallengeModule } from 'apps/challenge/src/challenge.module';
import { createServer } from './shared/utils/create-server';
import { functionExport } from './shared/utils/function-export';
import { triggers } from 'shared/triggers';

export const challenge_super_frete = functionExport(
  createServer(ChallengeModule),
);

triggers.forEach((trigger, index) => {
  exports[`trigger_${index}`] = trigger;
});
