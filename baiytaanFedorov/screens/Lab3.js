import React from 'react';
import {
    Text,
    StyleSheet,
    ScrollView,
    View,
    SafeAreaView,
    Platform,
    StatusBar
} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import TaskItem from "../components/taskItem";

const Stack = createStackNavigator();

const Lab3 = () => {
    return (
        <SafeAreaView style={styles.body}>
            <TaskItem />
            <TaskItem />
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    body: {
        flex: 1,
        //paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
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