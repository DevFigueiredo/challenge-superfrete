import { Express } from 'express';

export const functionExport = (app: () => Promise<Express>) => {
  return async (req: any, res: any) => {
    const server = await app();
    server(req, res);
  };
};
