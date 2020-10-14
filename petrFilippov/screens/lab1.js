import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native'


const styles = StyleSheet.create({
  centrify:{
    flex:1,
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center"
  },
})

const lab1 = () => {
    return(
        <View style={styles.centrify}>
          <Text>
              Здрасьте!!!
          </Text>
        </View>
  )
}

export default lab1;