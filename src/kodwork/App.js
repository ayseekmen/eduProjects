import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import Router from './Router';
import { persistor, store } from './redux/ReduxManager';

function App() {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <Router />
            </PersistGate>
        </Provider>
    );
};

export default App;
