import * as firebase from 'firebase';

export class Memo {
  constructor(
    readonly body: string,
    readonly createdAt: firebase.firestore.Timestamp | null,
    readonly updatedAt: firebase.firestore.Timestamp | null,
    readonly id?: string,
  ) {}
}

// Firestore保存用 FIXME: timestamp 型とFIledValue型なんとかしたい
// type MemoDocumentData = {
//   body: string;
//   createdAt: firebase.firestore.Timestamp | null;
//   updatedAt: firebase.firestore.Timestamp | null;
// };

export const memoConverter = {
  toFirestore: (memo: Memo) => ({
    body: memo.body,
    createdAt: memo.createdAt,
    updatedAt: firebase.firestore.FieldValue.serverTimestamp(),
  }),
  fromFirestore(
    snapshot: firebase.firestore.QueryDocumentSnapshot,
    options: firebase.firestore.SnapshotOptions,
  ): Memo {
    const data = snapshot.data(options);

    return new Memo(data.body, data.createdAt, data.updatedAt, snapshot.id);
  },
};
