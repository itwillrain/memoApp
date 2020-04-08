import { createContext } from 'react';
import { Memo } from './services/models/memo';

export const MemoContext = createContext<Memo>({
  id: '',
  createdAt: null,
  updatedAt: null,
  body: '',
});

type FirebaseContextValue = {
  db: firebase.firestore.Firestore | null;
};

export const FirebaseContext = createContext<FirebaseContextValue>({
  db: null,
});
