import {
  Catch,
  ArgumentsHost,
  HttpException,
  HttpServer,
  Inject,
} from '@nestjs/common';
import { BaseExceptionFilter } from '@nestjs/core';
import { LoggerWinston } from '@shared/utils/logger-winston';
import RouteParser from '@shared/utils/route-parser';

@Catch()
export class AllExceptionsFilter extends BaseExceptionFilter {
  constructor(
    private readonly httpserver: HttpServer,
    @Inject('LoggerWinston')
    private logger?: LoggerWinston,
  ) {
    super(httpserver);
  }

  catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();
    if (process.env.ENVIROMENT === 'localhost') {
      if (exception.response) console.error(exception.response);
      else console.error(exception);
    }

    // Exceções via Axios
    if (
      exception?.response?.status === 401 ||
      exception?.response?.status === 403
    ) {
      const status = exception.response.status;
      const message = exception.message;
      this.logger.warn(message, {
        labels: {
          route: RouteParser.parseUrl(request.url),
          url: request.url,
        },
      });

      return response.status(status).json({
        statusCode: status,
        message: exception.response.data?.error,
        path: request.url,
      });
    }

    if (exception instanceof HttpException) {
      const status = exception.getStatus();
      const message = exception.message;
      this.logger.warn(message, {
        labels: {
          route: RouteParser.parseUrl(request.url),
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
        route: RouteParser.parseUrl(request.url),
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
