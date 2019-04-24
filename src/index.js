import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './components/app';
import ErrorBoundry from './components/error-boundry';
import DummyServices from './services/dummy-service';
import Spinner from './components/spinner';
import { InstrumentstoreServiceProvider } from './components/instrumentstore-service-context';

import store from './store';
import './i18n';
import './components/app/app.module.scss';

const DummyService = new DummyServices();

ReactDOM.render(
    <Provider store={store}>
            <InstrumentstoreServiceProvider value={DummyService}>
                <Suspense fallback={<Spinner />}>
                    <ErrorBoundry>
                        <App />
                    </ErrorBoundry>
                </Suspense>
            </InstrumentstoreServiceProvider>
    </Provider>,
    document.getElementById('root')
);