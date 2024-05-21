import { createNestServer } from '../../../shared/utils/app';
import { functionExport } from 'shared/utils/function-export';
import { DesafioSuperFreteModule } from './desafio-super-frete.module';

exports.desafio_super_frete = functionExport(
  createNestServer(DesafioSuperFreteModule),
);
