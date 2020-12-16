
import React, {useState} from 'react';
import {
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

const App = () => {
  const [count, counter] = useState(0);
  const onPress = () => counter(prevCount => prevCount + 1);
  return (
    <View style={styles.block}>
        <Text>Нажатий: {count} </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={onPress}
      >
        <Text>+1</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 15
  }
});

export default App;
