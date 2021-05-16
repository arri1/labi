/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity
} from 'react-native';

import {
    Colors,
} from 'react-native/Libraries/NewAppScreen';


const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: Colors.lighter,
    },

    body: {
        backgroundColor: Colors.white,
    },
});

const Lab2 = () => {
    const [color, setColor] = useState('green');
    const [count, setCount] = useState(0);

    const getRandomInt = (max) => {
        return Math.floor(Math.random() * Math.floor(max));
    };

    const randomColor = () => {
        const x = getRandomInt(4);
        switch (x) {
            case 0:
                setColor('yellow')
                break;
            case 1:
                setColor('green')
                break;
            case 2:
                setColor('red')
                break;
            case 3:
                setColor('blue')
                break;
            default:
        }
    };

    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
            }}>

            <TouchableOpacity
                onPress={() => {
                    randomColor();
                    setCount(count + 1);
                }}>

                <View
                    style={{
                        backgroundColor: color,
                        width: 300,
                        height: 300
                    }}>
                    <View
                        style={{
                            flex: 1,
                            justifyContent: "center",
                            alignItems: "center"
                        }}>
                        <Text
                            style={{
                                fontSize: 50
                            }}>
                            {count}
                        </Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    );
};

export default Lab2;