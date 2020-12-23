import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions } from 'react-native'
import CheckBox from '@react-native-community/checkbox'
import AntDesign from 'react-native-vector-icons/AntDesign'

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const TodoItem = ({title, isComplete, complete, remove}) => {
    return (
        <View style={styles.body}>
            <View style={styles.header}>
                <View style={styles.checkboxContainer}>
                    <CheckBox
                        disabled={false}
                        value={isComplete}
                        onValueChange={complete}
                        tintColors={{ true: '#FFFFFF', false: '#FFFFFF' }}
                    />
                </View>
                <View style={styles.textContainer}>
                    <Text style={[styles.text, isComplete && styles.textComplete]}>
                        {title}
                    </Text>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        onPress={remove}
                    >
                        <AntDesign name='delete' size={20} color='#FFFFFF' />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.imageContainer}>
                <Image
                    style={styles.image}
                    source={require("../resources/todolist.png")}
                />
            </View>
        </View>
    )
}

TodoItem.defaultProps = {
    title: 'Без названия',
    isComplete: false,
    complete: () => { },
    remove: () => { }
}

const styles = StyleSheet.create({
    body: {
        backgroundColor: "#4CBC57",
        alignItems: 'center',
        marginHorizontal: 10,
        marginTop: 10,
        borderRadius: 5,
        flexDirection: 'column'
    },
    header: {
        flexDirection: 'row',
        height: 40,
        width: '100%'
    },
    checkboxContainer: {
        height: '100%',
        width: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textContainer: {
        flex: 1,
        justifyContent: 'center'
    },
    text: {
        fontSize: 14,
        color: '#39311D',
        fontFamily: 'roboto'
    },
    textComplete: {
        textDecorationLine: 'line-through',
        color: '#000000'
    },
    buttonContainer: {
        height: '100%',
        width: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center'
    },
    imageContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        width: screenWidth - 20,
        height: (screenWidth - 77) * 3 / 4
    },
    image: {
        flex: 1,
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        resizeMode: 'contain'
    }
})

export default TodoItem