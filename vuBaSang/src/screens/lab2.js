import React, {useState} from 'react';
import {ScrollView, TouchableOpacity, ImageBackground, View, Text} from "react-native"
import styles from '../styles/styles'

const data = [
    {
    backgroundColor: '#ffffff',
    backgroundText: 'СТАНОВЯТСЯ WHITE'
    },
    {
    backgroundColor: 'black',
    backgroundText: 'СТАНОВЯТСЯ BLACK'
    },
    {
    backgroundColor: 'brown',
    backgroundText: 'СТАНОВЯТСЯ BROWN'
    },
    {
    backgroundColor: 'red',
    backgroundText: 'СТАНОВЯТСЯ RED'
    },
    {
    backgroundColor: 'yellow',
    backgroundText: 'СТАНОВЯТСЯ YELLOW'
    },
    {
    backgroundColor: 'cyan',
    backgroundText: 'СТАНОВЯТСЯ CYAN'
    },
    {
    backgroundColor: '#DE3163',
    backgroundText: 'СТАНОВЯТСЯ CERISE'
    },
    {
    backgroundColor: 'green',
    backgroundText: 'СТАНОВЯТСЯ GREEN'
    },
    {
    backgroundColor: 'blue',
    backgroundText: 'СТАНОВЯТСЯ BLUE'
    },
    {
    backgroundColor: 'pink',
    backgroundText: 'СТАНОВЯТСЯ PINK'
    }
]

const backgroundImage = { uri: "https://cdn25.img.ria.ru/images/152784/45/1527844534_0:180:3003:1869_600x0_80_0_0_a21740ca93b64b71ac1bf2d5396b3bd5.jpg" };

const Lab2 = ()=>{
    const [backgroundColor, setBackgroundColor] = useState(
        'orange'
    )
    return(
        <View style={styles.container}>
            <ScrollView>
                {data.map(
                    (item, index) => {
                        return (
                        <TouchableOpacity
                            key={index}
                            style={[styles.itemLab2]}
                            onPress={() => {
                                 setBackgroundColor(item.backgroundColor)
                            }}
                        >
                            <ImageBackground
                                style={styles.backgroundImage}
                                imageStyle={{
                                     borderRadius: 30,
                                     backgroundColor: 'rgb(255,165,0)'
                                }}
                                source={backgroundImage}
                            >
                                <View
                                     style={{
                                     flex: 1,
                                     alignItems: "center",
                                     justifyContent: "center",
                                     backgroundColor: backgroundColor,
                                     opacity: 0.6,
                                     borderRadius: 30
                                     }}
                                >
                                    <Text
                                         style={{ color: item.backgroundColor, fontSize: 25, fontWeight: 'bold'}}>
                                         {item.backgroundText}
                                    </Text>
                                </View>
                            </ImageBackground>
                        </TouchableOpacity>
                        )
                    })}
            </ScrollView>
        </View>
    )
}
export default Lab2
