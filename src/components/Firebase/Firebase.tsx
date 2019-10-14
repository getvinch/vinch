import React, { useEffect } from 'react';
import firebase from 'firebase/app';

export const FirebaseContext = React.createContext({
  firebase: {},
} as {
  firebase: typeof firebase;
});

type ConfigVariableValue = string | undefined;

type FirebaseProviderProps = {
  config: {
    apiKey: ConfigVariableValue;
    authDomain: ConfigVariableValue;
    databaseURL: ConfigVariableValue;
    projectId: ConfigVariableValue;
    storageBucket: ConfigVariableValue;
    messagingSenderId: ConfigVariableValue;
    appId: ConfigVariableValue;
    measurementId: ConfigVariableValue;
  };
  children: React.ReactNode;
};

export function FirebaseProvider(props: FirebaseProviderProps) {
  useEffect(() => {
    // Initialize Firebase
    firebase.initializeApp(props.config);
  });

  return (
    <FirebaseContext.Provider value={{ firebase }}>
      {props.children}
    </FirebaseContext.Provider>
  );
}
