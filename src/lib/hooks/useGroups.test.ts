import { renderHook } from '@testing-library/react-hooks';
import useGroups from './useGroups';
import firebase from 'firebase';

const mockFirebaseConfig = {
  apiKey: 'mockApiKey',
  authDomain: 'mockAuthDomain',
  databaseURL: 'mockDatabaseURL',
  projectId: 'mockProjectId',
  storageBucket: 'mockStorageBucket',
  messagingSenderId: 'mockMessageSenderId',
  appId: 'mockAppId',
  measurementId: 'mockMeasurementId',
};

describe('useGroups', () => {
  beforeAll(async () => {
    firebase.initializeApp(mockFirebaseConfig);
    await firebase.firestore().enableNetwork();
  });

  afterAll(async () => {
    // prevent jest from hanging:
    // https://github.com/facebook/jest/issues/7287#issuecomment-488886582
    await firebase.firestore().disableNetwork();
  });

  it('returns data from useFireStoreQuery', () => {
    const { result } = renderHook(() => {
      return useGroups({ client: firebase });
    });

    expect(result.current.loading).toBe(true);
    expect(result.current.error).toBe(undefined);
    expect(result.current.data).toEqual([]);
  });
});
