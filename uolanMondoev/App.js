

import React, { useState } from 'react'
import {

    Dimensions,
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
} from 'react-native'
import Item from './components/item'
const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height
const styles = StyleSheet.create({
    container: {
        width,
        height,
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        width: 200,
        height: 50,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20
    }

});

const data = ['yellow', 'black', 'pink', 'blue']



const App = () => {
    const [backgroundColor, setBackgroundColor] = useState('green')
    return (

        <View style={[styles.container, { backgroundColor }]}>
            {
                data.map((item) => {
                    return (
                        <Item value={item} setBackgroundColor={setBackgroundColor} />

                    )
                })
            }

        </View>
    );
};



export default App;
