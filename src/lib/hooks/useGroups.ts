import { useContext } from 'react';
import { FirebaseContext } from '../../components/Firebase';
import { QueryResult, GroupType } from '../types';
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

  const currentUser = firebase.auth().currentUser;
  if (!currentUser) {
    throw new Error('Not Logged In');
  }

  const query = db
    .collection('groups')
    .where('roles.viewers', 'array-contains', currentUser.uid)
    .where('type', '==', GroupType.Board)
    .orderBy('createdAt', 'desc');

  const [snapshot, loading, error] = useCollection(query);
  if (error) {
    console.error(error);
  }

  return {
    snapshot,
    data: snapshot
      ? snapshot.docs.map(doc => {
          return { id: doc.id, ...doc.data() } as GroupsDocumentData;
        })
      : [],
    loading,
    error,
  };
}
