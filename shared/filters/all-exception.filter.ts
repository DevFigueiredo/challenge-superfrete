﻿import {
  Catch,
  ArgumentsHost,
  HttpException,
  HttpServer,
} from '@nestjs/common';
import { BaseExceptionFilter } from '@nestjs/core';
import { Logger } from 'shared/utils/logger';

@Catch()
export class AllExceptionsFilter extends BaseExceptionFilter {
  constructor(
    private readonly httpserver: HttpServer,
    private logger?: Logger,
  ) {
    super(httpserver);
  }

  catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();

    if (exception instanceof HttpException) {
      const status = exception.getStatus();
      const message = exception.message;
      this.logger.warn(message, {
        labels: {
          url: request.url,
        },
      });

      return response.status(status).json({
        statusCode: status,
        message: exception.message,
        path: request.url,
      });
    }

    const message = exception.message as any;
    this.logger.error(message, {
      labels: {
        url: request.url,
      },
    });

    return response.status(500).json({
      statusCode: 500,
      message: exception.message,
      path: request.url,
    });
  }
}
