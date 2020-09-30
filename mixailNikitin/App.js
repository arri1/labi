import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

const App: () => React$Node = () => {
  return (
    <View style = {styles.text}>
      <Text>
        Я люблю крепкий чай
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    textAlign: "center",
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  }

});

export default App;
