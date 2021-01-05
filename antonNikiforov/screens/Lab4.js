import React, {useEffect, useState} from 'react'
import {ActivityIndicator, ScrollView, StyleSheet, View, Text, Image} from "react-native"
import axios from 'axios'

const Lab4 = (props) => {
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
              <View key={item.id} style={styles.item}>
                <Text>
                  {item.title}
                </Text>
                <View style={styles.imageContainer}>
                  <Image
                    style={styles.image}
                    source={require("../resources/todolist.jpg")}
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
      {data ? content() : <ActivityIndicator color={'red'}/>}
    </View>
  )
}

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
    padding: 24,
    alignItems: 'center',
    justifyContent: 'center',
    width: 310,
    height: 310
  },
  image: {
    flex: 1,
    borderRadius: 50,
    resizeMode: 'contain'
  }
})

export default Lab4