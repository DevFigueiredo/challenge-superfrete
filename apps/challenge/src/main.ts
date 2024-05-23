import configuration from 'shared/config/configuration';
import { createServer } from '../../../shared/utils/create-server';
import { ChallengeModule } from './challenge.module';

const config = configuration();
createServer(ChallengeModule)()
  .then((app) => {
    if (!(config.environment === 'localhost'))
      console.log('🚀 Starting cloudfunction server...');
    else
      app.listen(config.port, () => {
        console.log('Server is running on http://localhost:' + config.port);
      });
  })
  .catch((err) => console.error('Application broken', err));
