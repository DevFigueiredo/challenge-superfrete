import configuration from 'shared/config/configuration';
import { createNestServer } from '../../../shared/utils/app';
import { DesafioSuperFreteModule } from './desafio-super-frete.module';

const config = configuration();
createNestServer(DesafioSuperFreteModule)()
  .then((app) => {
    if (!(config.environment === 'localhost'))
      console.log('🚀 Starting cloudfunction server...');
    else
      app.listen(config.port, () => {
        console.log('Server is running on http://localhost:' + config.port);
      });
  })
  .catch((err) => console.error('Application broken', err));
