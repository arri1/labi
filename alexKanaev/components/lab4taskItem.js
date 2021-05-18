import React from 'react';
import {
    Text,
    StyleSheet,
    View,
    Dimensions,
    Image
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';

const screenWidth = Dimensions.get('window').width;

const TaskItem = ({ title, completed }) => {
    return (
        <View style={styles.body}>
            <View style={styles.header}>
                <View style={styles.checkboxContainer}>
                    <CheckBox
                        disabled={false}
                        value={completed}
                        tintColors={{ true: '#89BEB3', false: '#B8C1CC' }}
                    />
                </View>
                <View style={styles.textContainer}>
                    <Text style={[styles.text, completed && styles.textComplete]}>
                        {title}
                    </Text>
                </View>
            </View>
            <View style={styles.imageContainer}>
                <Image
                    style={styles.image}
                    source={require("../resources/to-do-list.png")}
                />
            </View>
        </View>
    )
}

TaskItem.defaultProps = {
    title: "Без названия",
    isComplete: false,
    complete: () => { },
    remove: () => { }
}

const styles = StyleSheet.create({
    body: {
        backgroundColor: "#FFDCDC",
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
        color: '#757575'
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
        height: (screenWidth - 20) * 3 / 4
    },
    image: {
        flex: 1,
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        resizeMode: 'contain'
    }
})

export default TaskItem;
