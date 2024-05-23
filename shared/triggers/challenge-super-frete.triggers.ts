import * as functions from 'firebase-functions';
import { setIncrementalId } from 'shared/utils/set-incremental-id';

functions.firestore
  .document('challenge/{docId}')
  .onCreate((snapshot) => setIncrementalId(snapshot, 'challenge'));
