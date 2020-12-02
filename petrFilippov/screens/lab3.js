import React from 'react'
import { StyleSheet, SafeAreaView } from 'react-native'
import ToDo from '../components/ToDo'

const lab3 = () => {
    return(
        <SafeAreaView style={styles.container}>
            <ToDo />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 0,
    }
})

export default lab3;