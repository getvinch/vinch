import React, { useEffect, useState } from 'react';
import * as firebase from 'firebase';

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
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    // Initialize Firebase
    firebase.initializeApp(props.config);
    setIsInitialized(true);
  }, [props.config]);

  // TODO: Create spinner/loading bar while initializing datastore
  if (!isInitialized) {
    return null;
  }

  return (
    <FirebaseContext.Provider value={{ firebase }}>
      {props.children}
    </FirebaseContext.Provider>
  );
}
