import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './components/app';
import ErrorBoundry from './components/error-boundry';
import DummyServices from './services/dummy-service';
import Spinner from './components/spinner';
import { InstrumentstoreServiceProvider } from './components/instrumentstore-service-context';

import store from './store';
import './i18n';

const DummyService = new DummyServices();

ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundry>
            <InstrumentstoreServiceProvider value={DummyService}>
                <Router>
                    <Suspense fallback={<Spinner />}>
                        <App />
                    </Suspense>
                </Router>
            </InstrumentstoreServiceProvider>
        </ErrorBoundry>
    </Provider>,
    document.getElementById('root')
);