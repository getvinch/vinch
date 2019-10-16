import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import { FirebaseProvider, FirebaseContext } from './Firebase';
import firebase from 'firebase/app';
import { act } from 'react-dom/test-utils';

jest.mock('firebase/app', () => {
  return {
    initializeApp: jest.fn(),
  };
});

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

const MockComponent = () => {
  const { firebase } = useContext(FirebaseContext);
  expect(firebase).toBeTruthy();
  return <div />;
};

describe('FirebaseProvider', () => {
  it('should initialize firebase', () => {
    const div = document.createElement('div');

    act(() => {
      ReactDOM.render(
        <FirebaseProvider config={mockFirebaseConfig}>
          <MockComponent />
        </FirebaseProvider>,
        div,
      );
    });
    expect(firebase.initializeApp).toHaveBeenCalledTimes(1);
  });
});
