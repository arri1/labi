import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  Alert,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';





const App: () => React$Node = () => {
  //let numbers = [1,2,3];
  const [buttonColor, setButtonColor] = useState('rgb(255, 0, 255)');
  const [colorIndex, setColorIndex] = useState(0);
  
  
  
  return (
    <View>
      <Text>yare yare daze</Text>
      
      <Button title="нажми меня чтоб поменять цвет"
      color={buttonColor}
      onPress={() => setButtonColor("#F0000F")}/>
      <Button title="нажми меня чтоб поменять цвет"
      color={buttonColor}
      onPress={() => setButtonColor("#F0F00F")}/>
      <Button title="нажми меня чтоб поменять цвет"
      color={buttonColor}
      onPress={() => setButtonColor("#0FF000")}/>
      <Button title="нажми меня чтоб поменять цвет"
      color={buttonColor}
      onPress={() => setButtonColor("#00000F")}/>

    </View>

//color={buttonColor}

    /*<>
      <button></button>
      <StatusBar/>
      <SafeAreaView>
        <ScrollView>
          <Text>yare yare daze</Text>
        </ScrollView>
      </SafeAreaView>
    </>*/
 );
};



export default App;
