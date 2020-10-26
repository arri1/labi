import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {ApolloProvider} from '@apollo/react-hooks'
import apollo from './utils/apollo'
import BottomRouter from "./routers/bottomRouter"


const App = () => {
    return (
        <ApolloProvider client={apollo}>
            <NavigationContainer>
                <BottomRouter/>
            </NavigationContainer>
        </ApolloProvider>

    )
}
export default App;
