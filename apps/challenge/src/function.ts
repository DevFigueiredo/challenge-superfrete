import { ChallengeModule } from './challenge.module';
import { createServer } from '../../../shared/utils/create-server';
import { functionExport } from '../../../shared/utils/function-export';
import { onChallengeCreate } from './triggers/challenge.trigger';

const challenge = functionExport(createServer(ChallengeModule));

export { onChallengeCreate, challenge };
