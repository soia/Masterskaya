import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './components/app';
import ErrorBoundry from './components/error-boundry';
import DummyServices from './services/dummy-service';
import { InstrumentstoreServiceProvider } from './components/instrumentstore-service-context';

import store from './store';

const DummyService = new DummyServices();

ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundry>
            <InstrumentstoreServiceProvider value={DummyService}>
                <Router>
                    <App />
                </Router>
            </InstrumentstoreServiceProvider>
        </ErrorBoundry>
    </Provider>,
    document.getElementById('root')
);