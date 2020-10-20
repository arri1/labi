import React, {useState} from 'react';
import { 
  View, 
  TouchableOpacity, 
  Text, 
  StyleSheet, 
  Button 
} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

function HomeScreen({ navigation }) {
  const handle = () => false
  const [backgroundColor, setBackgroundColor] = useState('black')
  let color = 0;
  return (
    <View style={{ flex: 1,  justifyContent: 'center' }}>
      <View style={[styles.main, { backgroundColor }]}>
        <View>
          <Button 
            onPress={() =>{
              color = Math.floor(Math.random() * 99999);
              setBackgroundColor(color)
            }}
            title="color"
          />
          <Button
            onPress = {handle}
            title="звук"
          />
        </View>
        <View style={styles.container}>
          <TouchableOpacity>
            <Text style = {styles.text}>
               Button
            </Text>
          </TouchableOpacity>
        </View>
        
      </View>
      <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go to notifications"
      />
    </View>
  );
}

function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back Lab2" />
    </View>
  );
}
const Drawer = createDrawerNavigator();

const App = () =>{    
  return(
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Lab2">
        <Drawer.Screen name="Lab2" component={HomeScreen} />
        <Drawer.Screen name="Notifications" component={NotificationsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create ({
  container: {
    alignItems: 'center',
  },
  text: {
    borderWidth: 1,
    padding: 25,
    borderColor: 'black',
    backgroundColor: 'red'
  },
  nav: {
    
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 10,
    paddingTop: 10,
  },
  main:{
    // margin: 50,
  },
})

export default App;