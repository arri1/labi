import React, { useEffect, useState } from 'react'
import {
    ActivityIndicator,
    ScrollView,
    StyleSheet,
    View,
    Text,
} from 'react-native';
import axios from 'react-native-axios'


const Lab3 = () => {
    const [data, setData] = useState()
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts', {
            params: {
                "userId": 1
            }
        })
        .then(({ data }) => {
            setData(data)
        })
        .catch((e) => {
            console.error(e.message)
        })
    })

    const todolist = () => {
        return (
            <ScrollView>{
                data.map(
                    (item) => {
                        return (
                            <View key={item.id} style={styles.item}>
                                <Text style={styles.itemtitle}>
                                    {item.title}
                                </Text>
                                <Text style={styles.itembody}>
                                    {item.body}
                                </Text>
                            </View>
                        )
                    }
                )}
            </ScrollView>
        )
    }

    return (
        <View style={styles.container}>
            {data ? todolist() : <ActivityIndicator/>}
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        borderColor: '#000000',
        borderWidth: 2,
        marginBottom: 10,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 10,
        padding: 10,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    configbox: {
        marginTop: 10
    },
    itemtitle: {
        color: '#000000',
        fontSize: 20,
        marginBottom: 10
    },
    itembody: {
        color: '#000000',
        fontSize: 15
    },
})

export default Lab3