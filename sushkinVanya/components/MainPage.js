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

export default class MainPage extends React.Component {
  state = 
  {
    daze: false
  };

  Lab2Click = () => {
    this.props.navigation.navigate('Lab2')
  }

  Lab3Click = () => {
    this.props.navigation.navigate('Lab3')
  }

  Lab4Click = () => {
    this.props.navigation.navigate('Lab4')
  }

  render()
  {
    return(
      <View style = {styles.container}>
        <Button 
        title="Lab2"
        color={'#000fff'}
        onPress={(this.Lab2Click)}/>
        <Button 
        title="Lab3"
        color={'#000fff'}
        onPress={(this.Lab3Click)}/>
        <Button 
        title="Lab4"
        color={'#000fff'}
        onPress={(this.Lab4Click)}/>
      </View>
    );
  }
}



const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center'
  }
})