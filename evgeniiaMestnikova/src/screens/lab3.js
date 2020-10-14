import React, { useState, useEffect } from 'react'
import { ActivityIndicator, ScrollView, View } from "react-native"
import axios from 'react-native-axios'
import TodoItem from '../components/TodoItem'
import styles from '../styles/styles'

const Lab3 = () => {
    const [data, setData] = useState(null)

    useEffect(() => {
        axios
            .get('http://jsonplaceholder.typicode.com/todos')
            .then(({ data }) => {
                const lessData = data.filter(
                    (item) => item.id <= 40
                )
                setData(lessData)
            })
            .catch((error) => {
                console.error(error.message)
            })
    }, [])

    const content = () => {
        return (
            <ScrollView style={styles.scrollview}>
                {
                    data.map(
                        (item, index) => {
                            return (
                                <TodoItem
                                    key={index}
                                    item={item}
                                />
                            )
                        }
                    )
                }
            </ScrollView>
        )
    }

    return (
        <View style={styles.container}>
            {
                data ?
                    (content()
                    ) : (
                        <ActivityIndicator
                            size={70}
                            color={'grey'}
                        />
                    )
            }
        </View>
    )
}
export default Lab3