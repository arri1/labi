import React, {useState} from 'react';
import {ScrollView, TouchableOpacity, ImageBackground, View, Text} from "react-native"
import LinearGradient from 'react-native-linear-gradient';
import styles from '../styles/styles'

const Profile = ()=>{
    const [backgroundColor, setBackgroundColor] = useState(
        'orange'
    )
    return(
        <View style={styles.container}>
        </View>
    )
}
export default Profile
