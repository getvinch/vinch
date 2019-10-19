import React, { useEffect, useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';

export const FirebaseContext = React.createContext({
  firebase: {},
} as {
  firebase: typeof firebase;
});

type ConfigVariableValue = string | undefined;

interface FirebaseProviderProps {
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
  loaderNode?: React.ReactNode;
  children: React.ReactNode;
}

export function FirebaseProvider(props: FirebaseProviderProps) {
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    // Initialize Firebase
    firebase.initializeApp(props.config);
    setIsInitialized(true);
  }, [props.config]);

  if (!isInitialized) {
    return <>{props.loaderNode ? props.loaderNode : null}</>;
  }

  return (
    <FirebaseContext.Provider value={{ firebase }}>
      {props.children}
    </FirebaseContext.Provider>
  );
}
