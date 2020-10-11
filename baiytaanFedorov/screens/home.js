import React from 'react';
import {
    Text,
    StyleSheet,
    View
} from 'react-native';

const Home = () => {
    return (
        <View style={styles.body}>
            <Text style={styles.text}>
                Hi, this is{'\n'}homescreen
            </Text>
        </View>
    )
};

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
        fontWeight: 'bold',
        textAlign: 'center'
    }
});

export default Home;