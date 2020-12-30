import React from 'react'
import 'react-native-gesture-handler';
import MainNavigation from './src/routers/mainRouter'

const App = () => {
    return (
        <View style={
            {
                width,
                height
            }
        }>
            <ApolloProvider client={apollo}>
                <NavigationContainer>
                    <MainRouter/>
                </NavigationContainer>
            </ApolloProvider>
            <FlashMessage position="top"/>
        </View>
    )
}
export default App;