import React, {useState} from 'react';
import {ScrollView, StyleSheet, View} from "react-native"
import Item from "../components/item"

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
    },
    {
        backgroundColor: '#40e54a'
    }

]

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }

})
const Lab2 = (props)=>{
    const [backgroundColor, setBackgroundColor] = useState('yellow')
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
