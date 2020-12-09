import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabRouter from './routers/bottomTabRouter.js'

export default function App() {
    return (
        <NavigationContainer>
            <BottomTabRouter />
        </NavigationContainer>
    );
}
