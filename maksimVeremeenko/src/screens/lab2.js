import React, {useState} from 'react';
import styles from '../styles/styles';
import {
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

const Lab2 = () => {
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

export default Lab2;