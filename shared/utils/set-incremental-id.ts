import { firestore } from 'firebase-admin';
import { database } from './database';

export const setIncrementalId = async (
  snapshot: firestore.DocumentSnapshot,
  collectionName: string,
): Promise<void> => {
  try {
    // Obtém o último ID registrado na coleção
    const querySnapshot = await database
      .collection(collectionName)
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

    console.log(
      `Incremental ID ${newId} set for document in ${collectionName} collection`,
    );
  } catch (error) {
    console.error(
      `Erro ao definir incremental_id para a coleção ${collectionName}:`,
      error,
    );
  }
};
