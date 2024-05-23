import { database } from 'shared/utils/database';
import { createServer } from '../shared/utils/create-server';
import { functionExport } from '../shared/utils/function-export';
import * as functions from 'firebase-functions';
import { ChallengeSuperFreteModule } from 'apps/challenge-super-frete/src/challenge-super-frete.module';

functions.firestore
  .document('challenge')
  .onCreate(async (snapshot, context) => {
    try {
      // Obtém o último ID registrado na coleção
      const querySnapshot = await database
        .collection('challenge')
        .orderBy('incremental_id', 'desc')
        .limit(1)
        .get();
      let lastId = 0;
      if (!querySnapshot.empty) {
        const lastDocument = querySnapshot.docs[0];
        lastId = lastDocument.data().incremental_id;
      }

      // Incrementa o ID
      const newId = lastId + 1;

      // Atualiza o documento criado com o novo ID incremental
      await snapshot.ref.update({ incremental_id: newId });

      console.log(`Incremental ID ${newId} set for document ${context.params}`);
    } catch (error) {
      console.error('Erro ao definir incremental_id:', error);
    }
  });
exports.challenge_super_frete = functionExport(
  createServer(ChallengeSuperFreteModule),
);
