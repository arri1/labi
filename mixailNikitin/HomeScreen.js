import React from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';

const HomeScreen = () => {
    return (
        <View>
            <Text style={styles.text}>
                HomeScreen
     </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    text: {
        color: '#F8F8FF',
        textAlign: "center",
        fontSize: 20,
        fontFamily: "serif",
    }
});

export default HomeScreen;
