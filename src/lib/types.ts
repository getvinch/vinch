export interface QueryResult<QueryDocumentData> {
  data: ({ id: string } & (
    | QueryDocumentData
    | firebase.firestore.DocumentData))[];
  isLoading: boolean;
  isLoaded: boolean;
  error?: any;
}
