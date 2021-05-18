import React, {useEffect, useState} from 'react'
import {ActivityIndicator, ScrollView, StyleSheet, View, Text, Image} from "react-native"
import axios from 'axios'

const styles = StyleSheet.create({
    item: {
      padding: 24,
      borderRadius: 24,
      marginBottom: 24,
      marginLeft: 24,
      marginRight: 24,
      borderColor: 'black',
      borderBottomWidth: 5,
      borderWidth: StyleSheet.hairlineWidth,
      backgroundColor: 'white'
    },
    container: {
      backgroundColor: '#DCDCDC',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    imageContainer: {
      padding: 10,
      marginLeft: 50,
      alignItems: 'center',
      justifyContent: 'center',
      width: 200,
      height: 200
    },
    image: {
      flex: 1,
      borderRadius: 50,
      resizeMode: 'contain'
    }
  })

const Lab3 = (props) => {
    const [data, setData] = useState()

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts').then(({data}) => {
            setData(data)
            console.log(data)

        }).catch((e) => {
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
                                <Text style={styles.title}>
                                    {item.title}
                                </Text>
                                <View style={styles.imageContainer}>
                                    <Image
                                        style={styles.image}
                                         source={require("../resources/image.jpg")}
                                        />
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
            {data ? content() : <ActivityIndicator size="large" color="#00ff00" />}
        </View>
    )
}
export default Lab3