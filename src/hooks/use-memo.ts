import { useContext, useEffect, useRef, useState } from 'react';

import { collectionName } from '../services/constants';
import { FirebaseContext } from '../contexts';
import { Memo, memoConverter } from '../services/models/memo';

const useMemo = (uid: string, id: string) => {
  const [memo, setMemo] = useState<Memo>(new Memo('', null, null));
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const firebaseRef = useRef(useContext(FirebaseContext));

  useEffect(() => {
    const { db } = firebaseRef.current;
    if (!db) throw new Error('Firestore is not initialized');
    const collection = db.collection(`users/${uid}/${collectionName.memos}`);

    const load = async () => {
      setLoading(true);
      try {
        const doc = await collection.doc(id).withConverter(memoConverter).get();
        const data = doc.data();
        setMemo(data);
        setError(null);
      } catch (err) {
        setError(err);
      }
      setLoading(false);
    };
    load();
    const clear = () => {
      console.log('clear');
    };

    return clear;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { memo, loading, error };
};

export default useMemo;
