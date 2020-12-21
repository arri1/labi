import React, {useEffect, useState} from 'react'
import {ActivityIndicator, ScrollView, StyleSheet, View,Text} from "react-native"
import axios from 'axios'

const styles = StyleSheet.create({
  item: {
    padding: 24,
    borderRadius: 24,
    marginBottom: 24,
    marginLeft: 24,
    marginRight: 24,
    borderColor: 'black',
    borderWidth: StyleSheet.hairlineWidth
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

const Lab3a = (props) => {
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
                <Text style={{marginTop: 24}}>
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
      {data ? content() : <ActivityIndicator color={'red'}/>}
    </View>
  )
}
export default Lab3a