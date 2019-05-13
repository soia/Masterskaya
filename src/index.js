import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './components/app';
import ErrorBoundry from './components/pages/error-page/error-boundry';
import DummyServices from './services/dummy-service';
import Spinner from './components/spinner';
import { StoreServiceProvider } from './components/store-service-context';
import store from './_helpers/store';
import './i18n';

import './components/app/app.module.scss';

// setup fake backend
import { configureFakeBackend } from './_helpers';
configureFakeBackend();

const DummyService = new DummyServices();

ReactDOM.render(
    <Provider store={store}>
            <StoreServiceProvider value={DummyService}>
                <Suspense fallback={<Spinner />}>
                    <ErrorBoundry>
                        <App />
                    </ErrorBoundry>
                </Suspense>
            </StoreServiceProvider>
    </Provider>,
    document.getElementById('root')
);