export interface QueryResult<QueryDocumentData> {
  data: ({ id: string } & (QueryDocumentData))[];
  snapshot?: firebase.firestore.QuerySnapshot;
  loading: boolean;
  error?: any;
}

export enum GroupType {
  Board = 'board',
}
