import React, {useEffect, useState} from 'react'

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
            }
        ).then(({data}) => {
            setData(data)
        }).catch((e) => {
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
                                <View style={styles.configbox}>
                                    <Text style={styles.itemdate}>Sample Date</Text>
                                </View>
                            </View>
                        )
                    }
                )}
            </ScrollView>
        )
    }

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.title}>ToDo List</Text>
            </View>
            
            {data ? todolist() : <ActivityIndicator color={'black'}/>}
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        borderColor: '#666666',
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
    title: {
        fontSize: 25,
        padding: 10
    },
    itemtitle: {
        fontSize: 20,
        marginBottom: 10
    },
    itembody: {
        fontSize: 15
    },
    itemdate: {
        fontSize: 13
    },
})

export default Lab3