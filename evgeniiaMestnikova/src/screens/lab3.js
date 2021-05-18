import React, { useState, useEffect } from 'react'
import { ActivityIndicator, ScrollView, View } from "react-native"
import axios from 'react-native-axios'
import TodoItem from '../components/TodoItem'
import styles from '../styles/styles'
import colors from '../styles/colors'
import LinearGradient from 'react-native-linear-gradient';

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
        <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
            colors={[
                colors.gradient1,
                colors.gradient2
            ]}
            style={{ flex: 1 }}
        >
            <View style={styles.containerLab3}>
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
        </LinearGradient>
    )
}
export default Lab3