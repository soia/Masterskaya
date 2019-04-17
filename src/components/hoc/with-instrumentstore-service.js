import React from 'react';
import { InstrumentstoreServiceConsumer } from '../instrumentstore-service-context';

const withInstrumentstoreService = () => (Wrapped) => {

    return (props) => {
        return (
            <InstrumentstoreServiceConsumer>
                {
                    (instrumentstoreService) => {
                        return (<Wrapped {...props}
                            instrumentstoreService={instrumentstoreService} />);
                    }
                }
            </InstrumentstoreServiceConsumer>
        );
    }
};

export default withInstrumentstoreService;
