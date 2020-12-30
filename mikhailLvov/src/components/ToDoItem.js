import React ,{useState , useEffect } from 'react';
import styles from '../styles/styles'
import {Card} from 'react-native-paper'
import Checkbox from 'react-native-paper/src/components/Checkbox/Checkbox'
import Colors from '../styles/colors'
import LinearGradient from 'react-native-linear-gradient'
import background from './backgroundBox'

const ToDoItem = (props) => {
    const [checked, setChecked] = useState(false)

    if(background =="1"){
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
                        Colors.gradient1,
                        Colors.gradient2
                    ]}
                    style={{flex:1,
                    borderRadius:20}}>
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
    } else {

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
                        Colors.gradient3,
                        Colors.gradient2
                    ]}
                    style={{flex:1,
                    borderRadius:20}}>
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

    }
};

export default ToDoItem