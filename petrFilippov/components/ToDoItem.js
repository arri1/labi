import React from 'react'
import { StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native'

const ToDoItem = ({ title, isComplete }) => {
    return(
    <TouchableHighlight style={
        styles.container
    }
    underlayColor={'gray'}
    onPress={() => {
       
    }} >
        <View style={styles.textContainer}>
            <Text style={isComplete && styles.textComplete}>
                {title}
            </Text>
        </View>
    </TouchableHighlight>
    )
}

ToDoItem.defaultProps = {
    title: 'Без названия',
    isComplete: false,
}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        marginHorizontal: 20,
        paddingVertical: 10,
        borderBottomWidth: StyleSheet.hairlineWidth,
        backgroundColor: '#007bff',
        borderRadius: 15,
        marginTop: 20
    },
    textContainer:{
        flex: 1
    },
    textComplete: {
        textDecorationLine: 'line-through'
    },
    button: {
        minWidth: 100,
        margin: 3,
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 6,
        backgroundColor: '#007bff'
    },
    buttonSuccess: {
        backgroundColor: 'green'
    },
    buttonDanger: {
        backgroundColor: 'red'
    },
    buttonText: {
        color: 'white',
        textAlign: 'center'
    },
})

export default ToDoItem