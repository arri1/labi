import React from 'react'
import { 
    StyleSheet, 
    SafeAreaView, 
    Platform, 
    StatusBar, 
    KeyboardAvoidingView } from 'react-native'
import Todo from '../components/Todo'


const Lab3 = () =>  {
    return(
        <SafeAreaView style={styles.Text}>
            <KeyboardAvoidingView
                style ={styles.todoContainer} 
                behavior="padding" 
            >
                <Todo  />
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    Text: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
    },
    todoContainer: {
        flex: 1,
    }
})

export default Lab3;