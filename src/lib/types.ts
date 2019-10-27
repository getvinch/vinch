export interface QueryResult<QueryDocumentData> {
  data: ({ id: string } & (QueryDocumentData))[];
  loading: boolean;
  error?: any;
}
