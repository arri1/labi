import React, {useEffect, useState} from 'react'

import {
    ActivityIndicator,
    ScrollView,
    StyleSheet,
    View,
    Text,
    ImageBackground
} from 'react-native';
import axios from 'react-native-axios'


const Lab3 = () => {

    const [data, setData] = useState()

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts', {
                params: {
                    "userId": 8
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
                            </View>
                        )
                    }
                )}
            </ScrollView>
        )
    }

    return (
        <View style={styles.container}>    
          <ImageBackground source={{uri:'https://picsum.photos/200/300?grayscale'}}style={{width: '100%',height: '100%'}}>
            {data ? todolist() : <ActivityIndicator color={'black'}/>}
          </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        borderColor: '#666666',
        backgroundColor: '#ffffff',
        opacity: 0.9,
        borderWidth: 1,
        marginBottom: 10,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 5,
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
        fontSize: 20,
        padding: 10
    },
    itemtitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10
        
    },
    itembody: {
      fontWeight: 'normal',
      fontStyle: 'italic',
      fontSize: 14,
      marginBottom: 10,
    },
    itemdate: {
        fontSize: 14
    },
})

export default Lab3