import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

const ToDoItem = ({ title, isComplete, complete, remove }) => {
    return(
    <View style={styles.container}>
        <View style={styles.textContainer}>
            <Text style={isComplete && styles.textComplete}>
                {title}
            </Text>
        </View>
        <View>
            <TouchableOpacity
                style={[styles.button, styles.buttonSuccess]}
                onPress={complete}>
                    <Text style={styles.buttonText}>
                            {isComplete ? 'Отменить' : 'Выполнить'}
                    </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[styles.button, styles.buttonDanger]}
                onPress={remove}>
                    <Text style={styles.buttonText}>
                        Удалить
                    </Text>
            </TouchableOpacity>
        </View>
    </View>
    )
}

ToDoItem.defaultProps = {
    title: 'Без названия',
    isComplete: false,
    complete: () => {},
    remove: () => {}
}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 20,
        paddingVertical: 10,
        borderBottomWidth: StyleSheet.hairlineWidth
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