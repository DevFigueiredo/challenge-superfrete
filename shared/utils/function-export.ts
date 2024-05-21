import * as functions from 'firebase-functions';
import { Express } from 'express';

// Função que exporta uma função do Express para o Firebase Functions
export const functionExport = (app: () => Promise<Express>) => {
  // Função que será exportada como uma função do Firebase Functions
  const firebaseFunction = functions.https.onRequest(async (req, res) => {
    // Obtém a instância do aplicativo Express
    const server = await app();
    // Chama o aplicativo Express com a requisição e resposta do Firebase Functions
    server(req, res);
  });
  // Retorna a função do Firebase Functions
  return firebaseFunction;
};
