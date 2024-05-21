import * as express from 'express';
import * as fs from 'fs';
import { NestFactory } from '@nestjs/core';
import { ExpressAdapter } from '@nestjs/platform-express';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { useRequestLogging } from 'shared/middlewares/logger-middleware';

let cachedServer: express.Express;
const isLocalhost = process.env.ENVIROMENT === 'localhost';

export const createNestServer = (module: any) => {
  return async () => {
    if (!cachedServer) {
      const expressInstance = express();
      const app = await NestFactory.create(
        module,
        new ExpressAdapter(expressInstance),
        {
          logger: isLocalhost ? console : false,
        },
      );

      const config = new DocumentBuilder()
        .setTitle('Desafio Super Frete - API')
        .setDescription('Desafio Super Frete - API')
        .setVersion('1.0')
        .build();

      const document = SwaggerModule.createDocument(app, config);
      SwaggerModule.setup('docs', app, document);

      //Salvar o json do swagger
      if (process.env.ENVIROMENT === 'localhost')
        fs.writeFileSync(
          './shared/docs/swagger.json',
          JSON.stringify(document),
        );
      useRequestLogging(app);

      app.enableCors();
      await app.init();
      cachedServer = expressInstance;
    }
    return cachedServer;
  };
};
