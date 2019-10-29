import { useContext } from 'react';
import { FirebaseContext } from '../../components/Firebase';
import { QueryResult } from '../types';
import { useCollection } from 'react-firebase-hooks/firestore';

interface GroupsDocumentData {
  id: string;
  type: string;
  name: string;
}

export type GroupState = QueryResult<GroupsDocumentData>;

export default function useGroups(
  options: {
    client?: typeof firebase;
  } = {},
): GroupState {
  const { firebase } = useContext(FirebaseContext);
  const client = options.client || firebase;
  const db = client.firestore();
  const query = db.collection('groups').where('type', '==', 'board');
  const [snapshot, loading, error] = useCollection(query);

  return {
    data: snapshot
      ? snapshot.docs.map(doc => {
          return { id: doc.id, ...doc.data() } as GroupsDocumentData;
        })
      : [],
    loading,
    error,
  };
}
