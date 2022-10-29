import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import MainNavigation from './navigation/MainNavigation';
import { persistor, store } from './redux/ReduxManager';

function App() {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <MainNavigation />
            </PersistGate>
        </Provider>
    );
};

export default App;
