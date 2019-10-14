import { useState, useMemo } from 'react';
import { QueryResult } from '../types';

type QueryState<QueryDocumentData> = QueryResult<QueryDocumentData>;

export default function useFirestoreQuery<QueryData>(
  query: firebase.firestore.Query,
): QueryState<QueryData> {
  const [queryResult, setQueryResult] = useState<QueryState<QueryData>>({
    data: [],
    isLoading: false,
    isLoaded: false,
    error: undefined,
  });

  useMemo(() => {
    if (!queryResult.isLoaded && !queryResult.isLoading) {
      setQueryResult(queryResult => ({ ...queryResult, isLoading: true }));
      query
        .get()
        .then((querySnapshot: firebase.firestore.QuerySnapshot) => {
          setQueryResult(queryResult => ({
            ...queryResult,
            isLoaded: true,
            isLoading: false,
            data: querySnapshot.docs.map(doc => {
              return { id: doc.id, ...doc.data() };
            }),
          }));
        })
        .catch(error => {
          console.log('Error getting documents: ', error);
          setQueryResult(queryResult => ({
            ...queryResult,
            isLoaded: true,
            isLoading: false,
            error,
          }));
        });
    }
  }, [queryResult.isLoading, queryResult.isLoaded, query]);

  return queryResult;
}
