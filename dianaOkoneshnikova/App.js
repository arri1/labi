import React from 'react'
import 'react-native-gesture-handler';
import MainRouter from './src/routers/mainRouter'

const App = () => {
    return (
        <View style={
            {
                width,
                height
            }
        }>
            <ApolloProvider client={apollo}>
                    <MainRouter/>
                    
            <FlashMessage position="top"/>
            </ApolloProvider>
        </View>
    )
}
export default App;