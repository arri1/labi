import React, { useState } from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    View,
    Text,
} from 'react-native';

const App = () => {
    const [backgroundColor, setbackgroundColor] = useState('pink')
    return (
        <View style={styles.container, { backgroundColor }}>
            <TouchableOpacity
                style={styles.button}
                onPress={() => {
                    if (backgroundColor === 'pink') {
                        setbackgroundColor('purple')
                        return null
                    }
                    setbackgroundColor('pink')
                }}
            ></TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        alignItems: "center",
        padding: 330
    }
});

export default App;
