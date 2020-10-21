import React, {useEffect, useState} from 'react'
import {
    Text,
    View,
    ScrollView,
    StyleSheet,
    ActivityIndicator,
} from "react-native"
import axios from 'react-native-axios'

//styling
const styles = StyleSheet.create({
    item: {
        padding: 25,
        borderRadius: 25,
        marginBottom: 25,
        marginLeft: 25,
        marginRight: 25,
        borderColor: 'black',
        borderWidth: StyleSheet.hairlineWidth
    },
    container: {
        //flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

const Lab3 = (props) => {
    const [data, setData] = useState()

    useEffect(() => {
        axios
            .get(
                'https://jsonplaceholder.typicode.com/posts'
            )
            .then(({data}) => {
                setData(data)
                console.log(data)

            })
            .catch((e) => {
                console.error(e.message)
            })
    })
    const content = () => {
        return (
            <ScrollView>{
                data.map(
                    (item) => {
                        return (
                            <View style={styles.item}>
                                <Text>
                                    {item.title}
                                </Text>
                                <Text style={{marginTop: 25}}>
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
            {data ? content() :
                <ActivityIndicator
                    color={'red'}
                />
            }
        </View>
    )
}
export default Lab3
