import React, { useEffect, useState } from 'react'
import {
    ActivityIndicator,
    ScrollView,
    StyleSheet,
    View,
    Image, 
} from 'react-native';
import axios from 'axios'

const Lab4 = () => {
    const [data, setData] = useState()
    useEffect(() => {
        axios.get('https://picsum.photos/v2/list?limit=15')
        .then(({ data }) => {
            setData(data)
        })
        .catch((e) => {
            console.error(e.message)
        })
    })
    const Lab4 = () => {
        return (
            <ScrollView>{
                data.map((item) => {
                        return (
                            <View key={item.id} style={styles.item}>
                                <Image style={{width: 300, height: 300}} source={{uri: item.download_url,}}/>
                            </View>
                        )
                    }
                )}
            </ScrollView>
        )
    }

    return (
        <View style={styles.container}>
            {data ? Lab4() : <ActivityIndicator/>}
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        borderColor: '#000000',
        borderWidth: 3,
        marginBottom: 12,
        marginLeft: 12,
        marginRight: 12,
        marginTop: 12,
        padding: 10,
    },
    container: {
        flex: 1,
        backgroundColor: '#000000',
        justifyContent: 'center',
        alignItems: 'center'
    },
    configbox: {
        marginTop: 10,
        backgroundColor: '#fff'
    },
    itemtitle: {
        color: '#fff',
        fontSize: 20,
        marginBottom: 10
    },
    itembody: {
        color: '#fff',
        fontSize: 15
    },
})

export default Lab4