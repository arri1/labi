import React, { useState } from 'react'
import {
  ImageBackground,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import styles from '../styles/styles'
import colors from '../styles/colors'
import LinearGradient from 'react-native-linear-gradient';

const backgroundImage = { uri: "https://picsum.photos/id/430/5302/3534" };

const Lab2 = (props) => {
  const [backgroundColor, setBackgroungColor] = useState('yellow')
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
      <View style={styles.containerLab2}>
        <ScrollView>
          {
            data.map((item, index) => {
              return (
                <TouchableOpacity
                  key={index}
                  style={[styles.itemLab2, { backgroundColor }]}
                  onPress={() => {
                    setBackgroungColor(item.backgroundColor)
                  }}
                >
                  <ImageBackground
                    style={styles.backgroundImage}
                    imageStyle={{
                      borderRadius: 20,
                      backgroundColor: 'rgba(255,0,0,.6)'
                    }}
                    source={backgroundImage}
                  >
                    <View
                      style={{
                        flex: 1,
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: backgroundColor,
                        borderRadius: 20,
                        opacity: 0.5
                      }}
                    >
                      <Text
                        style={{ color: item.backgroundColor, fontSize: 18 }}>
                        {item.backgroundText}
                      </Text>
                    </View>
                  </ImageBackground>
                </TouchableOpacity>
              )
            })
          }
        </ScrollView>
      </View>
    </LinearGradient>
  )
}

const data = [
  {
    backgroundText: 'Red',
    backgroundColor: colors.red
  },
  {
    backgroundText: 'Green',
    backgroundColor: colors.green
  },
  {
    backgroundText: 'Blue',
    backgroundColor: colors.blue
  },
  {
    backgroundText: 'Pink',
    backgroundColor: colors.pink
  },
  {
    backgroundText: 'Black',
    backgroundColor: colors.black
  }
]
export default Lab2
