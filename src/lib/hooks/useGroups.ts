import { useContext } from 'react';
import { FirebaseContext } from '../../components/Firebase';
import { QueryResult } from '../types';
import useFirestoreQuery from './useFirestoreQuery';

type GroupsDocumentData = {
  id: string;
  type: string;
  name: string;
};

type GroupState = QueryResult<GroupsDocumentData>;

export default function useGroups(
  options: {
    client?: typeof firebase;
  } = {},
): GroupState {
  const { firebase } = useContext(FirebaseContext);
  const client = options.client || firebase;
  const db = client.firestore();
  const query = db.collection('groups').where('type', '==', 'project');
  const groups = useFirestoreQuery<GroupsDocumentData>(query);

  return groups;
}
