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

    const [data, setData] = useState(null)

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
                                <ImageBackground opacity={0.15} source = {{uri : 'https://picsum.photos/seed/'+ item.id +'/600/300?grayscale&blur=2'}} style={{flex: 1}}>
                                    <View style={styles.box}>
                                        <Text style={styles.itemtitle}>
                                            {item.title}
                                        </Text>
                                        <Text style={styles.itembody}>
                                            {item.body}
                                        </Text>
                                        <View style={styles.configbox}>
                                            <Text style={styles.itemdate}>12/12/2020</Text>
                                        </View>
                                    </View>
                                </ImageBackground>
                            </View>
                        )
                    }
                )}
            </ScrollView>
        )
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>LAB 4</Text>
            </View>
            
            {data ? todolist() : <ActivityIndicator color={'#ffffff'}/>}
        </View>
    )
}

const styles = StyleSheet.create({
  item: {
    borderColor: '#666666',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#454545',
    marginTop: 3
  },
  box: {
    padding: 10,
    paddingTop: 3,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#222222'
  },
  header: {
    width: '100%',
    height: '8%',
    backgroundColor: '#323232',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#454545',
    justifyContent: 'center'
  },
  configbox: {
    marginTop: 8
  },
  title: {
    fontSize: 24,
    padding: 5,
    textAlign: 'center',
    fontWeight: "500",
    color: "#ffffff"
  },
  itemtitle: {
    fontSize: 18,
    marginBottom: 4,
    fontStyle: 'normal',
    fontWeight: '500',
    color: "#ffffff"
  },
  itembody: {
    fontSize: 13,
    fontWeight: '500',
    color: "#ffffff"
  },
  itemdate: {
    fontSize: 10,
    fontWeight: '500',
    color: "#ffffff"
  },
})

export default Lab3