import React, {useState} from 'react';
import {ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import Item from './components/item'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: 600
    }

})

const data = [
    {
        backgroundColor: 'pink'
    },
    {
        backgroundColor: 'black'
    },
    {
        backgroundColor: 'red'
    },
    {
        backgroundColor: 'blue'
    }

]

const App = () => {
    const [backgroundColor, setBackgroundColor] = useState('yellow')
    return (
        <View style={styles.container}>
            <ScrollView>
                {data.map((item) => {
                    return (
                      <Item
                          backgroundColor={backgroundColor}
                          setBackgroundColor={setBackgroundColor}
                          item={item}
                      />
                    )
                })}

            </ScrollView>
        </View>
    )
}
export default App;
