import React, {
    useEffect,
    useState,
    useContext
} from 'react'
import {
    View,
    ScrollView,
    Text,
    ActivityIndicator
} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import axios from 'react-native-axios'
//styling
import styles from '../styles/styles'
// Custom components
import TodoItem from '../components/TodoItem'
import { AppContext } from '../styles/DynamicThemeProvider'

const Lab3 = () => {
    const context = useContext(AppContext)

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
        <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            colors={[
                context.theme.colors.gradient1,
                context.theme.colors.gradient2
            ]}
            style={{ flex: 1 }}
        >
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
        </LinearGradient>
    )
}

export default Lab3
