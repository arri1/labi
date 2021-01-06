import React ,{useState , useEffect } from 'react';
import {StyleSheet} from 'react-native';
import {Card} from 'react-native-paper'
import Checkbox from 'react-native-paper/src/components/Checkbox/Checkbox'
import colors from '../colors/colors';
import LinearGradient from 'react-native-linear-gradient'

const ToDoItem = (props) => {
    const [checked, setChecked] = useState(false)

    useEffect(() => {
        props.item.completed
            ? setChecked(true)
            : setChecked(false)
    }, [])

    return (
    
        <Card style={styles.cardStyle}>
            <LinearGradient 
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 1 }}
                colors={[
                    colors.gradient1,
                    colors.gradient2
                ]}
                style={{flex:1,
                borderRadius:7,
                height: 75}}>
                <Card.Content style={styles.cardContent}>
                    <Card.Title
                        title={props.item.title}
                        titleNumberOfLines={2}
                        right={() => (
                            <Checkbox
                                status={
                                    checked
                                        ? 'checked'
                                        : 'unchecked'
                                }
                                onPress={() => {
                                    setChecked(!checked)
                                }}
                                color='#FFFFFF'
                            />
                        )}
                    />
                </Card.Content>
            </LinearGradient>
        </Card>
    )
};

const styles=StyleSheet.create({
    cardStyle:{
        flex: 1,
        margin: 12,
        marginTop: 3,
        marginBottom: 10,
        backgroundColor: 'transparent',
        elevation: 0,
    },
    cardContent: {
        flex: 1,
        backgroundColor: 'transparent',
        fontFamily: 'Lato-Regular',
    },
})

export default ToDoItem