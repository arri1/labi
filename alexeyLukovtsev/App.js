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
	<View>
		<Text style={styles.text}>Ассаламалейкумм</Text>
	</View>
  );
};

const styles = StyleSheet.create({
  text: {
  	textAlign: 'center',
  	fontSize: 40,
  	alignItems: 'center',
  	justifyContent: 'center',
  	fontFamily: 'times new roman',
  	fontStyle: 'italic',
  },
});

export default App;
