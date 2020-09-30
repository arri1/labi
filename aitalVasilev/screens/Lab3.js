import React, { useEffect, useState } from 'react'
import { View, ScrollView, Text } from 'react-native'
import styles from '../styles/styles'
import axios from 'react-native-axios'

export default Lab3 = () => {
    const [data, setData] = useState(null)

    useEffect(() => {
        axios
            .get('http://jsonplaceholder.typicode.com/todos')
            .then(({ data }) => {
                setData(data)
            })
            .catch((error) => {
                console.error(error.message)
            })
    }, [])

    const todos = data ? (
        data.map((item, index) => {
            return (
                <View key={index} style={styles.item}>
                    <Text>{item.title}</Text>
                </View>
            )
        })
    ) : (
        <Text>No data</Text>
    )

    return (
        <View style={styles.container}>
            <ScrollView>{todos}</ScrollView>
        </View>
    )
}
