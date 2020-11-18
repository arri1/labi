import React from 'react'
import { View, 
  TouchableOpacity,
  StyleSheet
} from 'react-native'

const App = () => {
    const [backgroundColor, setState] = React.useState('red')
    return (
       <View style = {styles.container,{backgroundColor}}>
         <TouchableOpacity
         style={styles.container}
         onPress={() => {
           if (backgroundColor == 'black') {
             setState('red')
             return null
            }
            setState('black')
          }}
         ></TouchableOpacity>
       </View>
    )
  }
  
  const styles = StyleSheet.create ({
    container: {
      height: "100%",
    },
  })

export default App