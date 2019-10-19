export interface QueryResult<QueryDocumentData> {
  data: ({ id: string } & (QueryDocumentData))[];
  isLoading: boolean;
  isLoaded: boolean;
  error?: any;
}
