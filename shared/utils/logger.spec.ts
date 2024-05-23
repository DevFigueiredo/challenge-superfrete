import { Logger } from './Logger';
import * as winston from 'winston';
describe('Logger', () => {
  let logger: Logger;

  beforeEach(() => {
    logger = new Logger();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should create winston logger with correct format and transports', () => {
    expect(winston.createLogger).toHaveBeenCalledWith({
      format: expect.any(Function),
      transports: [new winston.transports.Console()],
    });
  });

  it('should call winston logger methods with correct arguments', () => {
    logger.info('Test info message');
    expect((winston.createLogger().info as jest.Mock).mock.calls[0][0]).toBe(
      'Test info message',
    );

    logger.error('Test error message');
    expect((winston.createLogger().error as jest.Mock).mock.calls[0][0]).toBe(
      'Test error message',
    );

    logger.warn('Test warn message');
    expect((winston.createLogger().warn as jest.Mock).mock.calls[0][0]).toBe(
      'Test warn message',
    );

    logger.debug('Test debug message');
    expect((winston.createLogger().debug as jest.Mock).mock.calls[0][0]).toBe(
      'Test debug message',
    );

    logger.verbose('Test verbose message');
    expect((winston.createLogger().verbose as jest.Mock).mock.calls[0][0]).toBe(
      'Test verbose message',
    );
  });
});
