import React from 'react';
import {
    StyleSheet,
    View,
} from 'react-native';
import Task from "../components/lab4task";

const Lab4 = () => {
    return (
        <View style={styles.body}>
            <Task />
        </View>
    )
};

const styles = StyleSheet.create({
    body: {
        flex: 1,
    }
});

export default Lab4;
