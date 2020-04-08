import { format } from 'date-fns';
import { firestore } from 'firebase';

export const formatDate = (
  timestamp: firestore.Timestamp | null,
  formatType = 'yyyy/MM/dd',
): string => {
  if (timestamp) {
    return format(timestamp.toDate(), formatType);
  }

  return '';
};
