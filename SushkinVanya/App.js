import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {
  let numbers = [1,2,3];


  return (


    <>

      <StatusBar/>
      <SafeAreaView>
        <ScrollView>
          <Text>yare yare daze</Text>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};



export default App;
