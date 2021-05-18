import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  Image,
  View,
  ScrollView,
  FlatList
} from 'react-native';

import Api from './api';

export default class App extends Component<{}> {

  state = {
    users: []
  };

  async componentWillMount() {
    let users = await Api.getUsers();
    this.setState({users: users})
  }

  render() {
    return (
      <FlatList
        ListHeaderComponent={()=><Text style={styles.title}>Welcome to List</Text>}
        data={this.state.users}
        renderItem={({item})=> (
          <View style={styles.listItem}>
            <Image source={{uri: item.avatar_url}} style={styles.avatar} />
            <Text style={styles.title}>{item.login}</Text>
          </View>
        )}
        keyExtractor={(item)=>item.id}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5FCFF',
  },
  listItem: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#cccc'
  },
  title: {
    textAlign: 'center',
    padding: 20,
    fontSize: 20,
    fontWeight: '700'
  },
  avatar: {
    width: "100%",
    height: 200
  }
});