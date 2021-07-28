import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import { createFirestoreInstance } from 'redux-firestore';
import Firebase from "./Firebase";

const store = createStore(rootReducer)

const rrfProps = {
  Firebase,
  config: {
    userProfile: "users"
  },
  dispatch: store.dispatch,
  createFirestoreInstance
}

ReactDOM.render(
  <provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}> 
      <React.StrictMode>
            <App />
      </React.StrictMode>
    </ReactReduxFirebaseProvider>
  </provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
