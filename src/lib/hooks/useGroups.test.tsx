import React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import useGroups from './useGroups';
import { FirebaseProvider } from '../../components/Firebase';

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
  it('returns data from useFireStoreQuery', () => {
    const wrapper = ({ children }: { children?: React.ReactNode }) => (
      <FirebaseProvider config={mockFirebaseConfig}>
        {children}
      </FirebaseProvider>
    );
    const { result } = renderHook(
      () => {
        return useGroups();
      },
      { wrapper },
    );

    expect(result.current.isLoading).toBe(true);
    expect(result.current.isLoaded).toBe(false);
    expect(result.current.error).toBe(undefined);
    expect(result.current.data).toEqual([]);
  });
});
