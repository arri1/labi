import React, { useState } from 'react';
import {
    Text,
    StyleSheet,
    View
} from 'react-native';
import { useQuery } from "@apollo/react-hooks"
import { USER } from "../gqls/user/queries"
import LoadingBar from "../components/loadingBar"

const Home = () => {
    const [name, setName] = useState('')
    const { loading: userLoading } = useQuery(USER, {
        onCompleted: ({ user }) => {
            setName(user.name)
        },
        onError: () => {

        }
    })

    if (userLoading)
        return (
            <LoadingBar />
        )
    return (
        <View style={styles.body}>
            <Text style={styles.text}>
                Hi, {name !== null ? name + ', ' : ''}this is{'\n'}homescreen
            </Text>
        </View>
    )
};

const styles = StyleSheet.create({
    body: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        color: '#9C846A',
        fontSize: 20,
        fontFamily: 'calibri',
        fontStyle: 'italic',
        fontWeight: 'bold',
        textAlign: 'center'
    }
});

export default Home;
