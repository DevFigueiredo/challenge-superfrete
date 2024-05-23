import { Express } from 'express';
import { onRequest } from 'firebase-functions/v2/https';

// Função que exporta uma função do Express para o Firebase Functions
export const functionExport = (app: () => Promise<Express>) => {
  // Função que será exportada como uma função do Firebase Functions
  const firebaseFunction = onRequest(async (req, res) => {
    // Obtém a instância do aplicativo Express
    const server = await app();
    // Chama o Nestjs com a requisição e resposta do Firebase Functions
    server(req, res);
  });
  // Retorna a função do Firebase Functions
  return firebaseFunction;
};
