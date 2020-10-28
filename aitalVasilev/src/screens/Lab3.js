import React, { useEffect, useState } from 'react'
import {
    View,
    ScrollView,
    ActivityIndicator
} from 'react-native'
import axios from 'react-native-axios'
//styling
import styles from '../styles/styles'
// Custom components
import TodoItem from '../components/TodoItem'
import GradientBackground from '../components/GradientBackground'

const Lab3 = () => {
    const [data, setData] = useState(null)
    useEffect(() => {
        axios
            .get(
                'http://jsonplaceholder.typicode.com/todos'
            )
            .then(({ data }) => {
                const lessData = data.filter(
                    (item) => item.userId == 1
                )
                setData(lessData)
            })
            .catch((error) => {
                console.error(error.message)
            })
    }, [])

    const todos = () => {
        return (
            <ScrollView style={styles.scroll}>
                {data.map((item, index) => {
                    return (
                        <TodoItem
                            key={index}
                            item={item}
                        />
                    )
                })}
            </ScrollView>
        )
    }

    return (
        <GradientBackground>
            <View style={styles.container}>
                {data ? (
                    todos()
                ) : (
                    <ActivityIndicator
                        size={64}
                        color={'grey'}
                    />
                )}
            </View>
        </GradientBackground>
    )
}

export default Lab3
