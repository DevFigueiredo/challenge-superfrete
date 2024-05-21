import * as admin from 'firebase-admin';
admin.initializeApp();

export const database = admin.firestore();
// ADD THESE LINES
// if (location.hostname === '127.0.0.1') {
//   console.log('127.0.0.1 detected!');
//   database.useEmulator('127.0.0.1', 8080);
// }
