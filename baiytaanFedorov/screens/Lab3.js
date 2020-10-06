import React from 'react';
import {
    Text,
    StyleSheet,
    View
} from 'react-native';

const Lab3 = () => {
    return (
        <View style={styles.body}>
            <Text style={styles.text}>
                Hi, there
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        color: '#9C846A',
        fontSize: 20,
        fontFamily: 'calibri',
        fontStyle: 'italic',
        fontWeight: 'bold'
    }
});

export default Lab3;