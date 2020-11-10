import React, {useState} from 'react';
import {ScrollView, StyleSheet, View} from "react-native"
import Item from "../components/item"

const styles = StyleSheet.create({
    container: {
        flex: 2,
    }
})

const data = [
    {backgroundColor: 'white'},
    {backgroundColor: 'black'},
    {backgroundColor: 'red'},
    {backgroundColor: 'yellow'},
    {backgroundColor: 'green'},
    {backgroundColor: 'blue'},
    {backgroundColor: 'pink'}
]
const Lab2 = ()=>{
    const [backgroundColor, setBackgroundColor] = useState(
        'orange'
    )
    return(
        <View style={styles.container}>
            <ScrollView>
                {data.map(
                    (item) => {
                        return (
                            <Item
                                key={item.backgroundColor}
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
export default Lab2
