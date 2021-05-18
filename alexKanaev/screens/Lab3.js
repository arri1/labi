import React from 'react';
import {
    StyleSheet,
    View,
} from 'react-native';
import Task from "../components/task";

const Lab3 = () => {
    return (
        <View style={styles.body}>
            <Task />
        </View>
    )
};

const styles = StyleSheet.create({
    body: {
        flex: 1,
    },
    text: {
        color: '#9C846A',
        fontSize: 20,
        padding: 10,
        fontFamily: 'calibri',
        fontStyle: 'italic',
        fontWeight: 'bold'
    }
});

export default Lab3;
