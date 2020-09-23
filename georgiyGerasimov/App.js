import React, {useState} from 'react';
import {ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: 600
    },
    item: {
        flex: 1,
        minHeight: 200,
        borderRadius: 20,
        margin: 24,
        justifyContent: 'center',
        alignItems: 'center'
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
                        <TouchableOpacity
                            style={[styles.item, {backgroundColor}]}
                            onPress={() => {
                                setBackgroundColor(item.backgroundColor)
                            }}
                        >
                            <Text style={{color: item.backgroundColor}}>
                                {item.backgroundColor}
                            </Text>
                        </TouchableOpacity>
                    )
                })}

            </ScrollView>
        </View>
    )
}
export default App;
