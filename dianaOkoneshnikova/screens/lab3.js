import React, { useState, useEffect } from 'react'
import { ScrollView, View,Text, ActivityIndicator } from 'react-native'
import axios from 'react-native-axios'
import LinearGradient from 'react-native-linear-gradient'
const Lab3 = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        const getData = async () => {
            const {data:currentData} = await axios.get('https://jsonplaceholder.typicode.com/posts')
            console.log('currentData', currentData)
            if (currentData) setData(currentData)
        }
        getData()
    }, [])

    const renderItems = (data) => {
        return (
            <ScrollView>
                {
                    data.map((item) => {
                        return (
                            <View key={item.id}>
                                <Text>{item.title}</Text>
                                <Text>{item.text}</Text>
                            </View>
                        )
                    })
                }
            </ScrollView>
        )
    }

    return (
        <LinearGradient>
            start={{x:0, y:0}}
            end={{x:0, y:1}}
            colors={[
                colors.getGradientColor('#FF0000', '#00FF00', 0.4),
                colors.getGradientColor('#eec2db')
            ]}
        <ScrollView>
            {
                data ? renderItems(data) : <ActivityIndicator
                    size={70}
                    color={'black'}
                />
            }
        </ScrollView>
        </LinearGradient>
    )

}

export default Lab3