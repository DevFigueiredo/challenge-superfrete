import * as admin from 'firebase-admin';
admin.initializeApp({ projectId: 'desafio-super-frete' });

export const database = admin.firestore();
