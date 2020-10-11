import React from 'react';
import {
    Text,
    StyleSheet,
    View,
    TouchableOpacity
} from 'react-native';

const TaskItem = ({ title, isComplete, complete, remove }) => {
    return (
        <View style={styles.body}>
            <View style={styles.textContainer}>
                <Text style={[styles.text, isComplete && styles.textComplete]}>
                    {title}
                </Text>
            </View>

            <View>
                <TouchableOpacity
                    style={[styles.button, styles.buttonSuccess]}
                    onPress={complete}
                >
                    <Text style={styles.buttonText}>
                        {isComplete ? 'Отменить' : 'Выполнить'}
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.button, styles.buttonDanger]}
                    onPress={remove}
                >
                    <Text style={styles.buttonText}>
                        Удалить
                    </Text>
                </TouchableOpacity>
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
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 20,
        paddingVertical: 10,
        borderBottomWidth: StyleSheet.hairlineWidth
    },
    textContainer: {
        flex: 1
    },
    text: {
        fontSize: 16,
        color: '#000',
        fontFamily: 'times new roman'
    },
    textComplete: {
        textDecorationLine: 'line-through',
        color: '#757575'
    },
    button: {
        minWidth: 100,
        margin: 3,
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 6,
        backgroundColor: '#29b6f6'
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center'
    },
    buttonSuccess: {
        backgroundColor: '#28a745'
    },
    buttonDanger: {
        backgroundColor: '#dc3545'
    },
})

export default TaskItem;
