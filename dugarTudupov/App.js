import React from 'react'
import { View, 
  TouchableOpacity,
  StyleSheet,
  Text
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
         ><Text style={styles.text}>Нажмите для смены цвета</Text></TouchableOpacity>
       </View>
    )
  }
  
  const styles = StyleSheet.create ({
    text: {
      color: "white",
      textAlign: "center",
      padding: 100,
      fontSize: 16
      },
    container: {
      height: "100%"
    }
  })

export default App