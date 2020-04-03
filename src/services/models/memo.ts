import * as firebase from 'firebase';

class Memo {
  constructor(
    readonly body: string,
    readonly createdAt:
      | firebase.firestore.Timestamp
      | firebase.firestore.FieldValue
      | null,
    readonly updatedAt:
      | firebase.firestore.Timestamp
      | firebase.firestore.FieldValue
      | null,
    readonly id?: string,
  ) {}

  // 共通の振る舞いはここに
}

// Firestore保存用 FIXME: timestamp 型とFIledValue型なんとかしたい
type MemoDocumentData = {
  body: string;
  createdAt:
    | firebase.firestore.Timestamp
    | firebase.firestore.FieldValue
    | null;
  updatedAt:
    | firebase.firestore.Timestamp
    | firebase.firestore.FieldValue
    | null;
};

export const memoConverter = {
  toFirestore: (memo: Memo): MemoDocumentData => ({
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
