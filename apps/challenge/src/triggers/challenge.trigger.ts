import * as functions from 'firebase-functions';
import { setIncrementalId } from '../../../../shared/utils/set-incremental-id';

export const onChallengeCreate = functions.firestore
  .document('challenge/{docId}')
  .onCreate((snapshot) => {
    return setIncrementalId(snapshot, 'challenge');
  });
