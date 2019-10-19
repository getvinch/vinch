import { renderHook, act } from '@testing-library/react-hooks';
import useFirestoreQuery from './useFirestoreQuery';

const mockData = [{ id: 'mockId', data: () => ({ foo: 'bar' }) }];
const mockError = new Error('mocked error');
const mockFirestore = () => {
  return {
    collection: (arg: string) => {
      const querySnapshot = {
        docs: mockData,
      } as any;

      let callback = (arg: firebase.firestore.QuerySnapshot) => {};
      let error = (arg: Error) => {};
      return {
        onSnapshot: (
          _callback: (arg: firebase.firestore.QuerySnapshot) => void,
          _error: (arg: Error) => void,
        ) => {
          callback = _callback;
          error = _error;
        },
        triggerOnSuccess: () => callback(querySnapshot),
        triggerOnError: () => error(mockError),
      };
    },
  };
};

describe('useFirestoreQuery', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  const db = mockFirestore();

  // TODO: Write a more complete mock of firestore
  const query = db.collection('groups') as any;

  it('returns loading before complete', () => {
    const { result } = renderHook(() => {
      return useFirestoreQuery(query);
    });
    expect(result.current.isLoading).toBe(true);
    expect(result.current.isLoaded).toBe(false);
    expect(result.current.error).toBe(undefined);
    expect(result.current.data).toEqual([]);
  });

  it('returns data on success', () => {
    const { result } = renderHook(() => {
      return useFirestoreQuery(query);
    });
    act(() => {
      query.triggerOnSuccess();
    });
    expect(result.current.isLoading).toBe(false);
    expect(result.current.isLoaded).toBe(true);
    expect(result.current.error).toBe(undefined);
    expect(result.current.data).toEqual([
      {
        id: 'mockId',
        foo: 'bar',
      },
    ]);
  });

  it('returns an error on error ', () => {
    // surpress error console in test
    console.error = jest.fn();
    const { result } = renderHook(() => {
      return useFirestoreQuery(query);
    });
    act(() => {
      query.triggerOnError();
    });
    expect(result.current.isLoading).toBe(false);
    expect(result.current.isLoaded).toBe(true);
    expect(result.current.error).toBe(mockError);
    expect(result.current.data).toEqual([]);
  });
});
