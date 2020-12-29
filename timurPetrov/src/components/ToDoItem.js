import React ,{useState , useEffect } from 'react';
import styles from '../styles/styles'
import {Card} from 'react-native-paper'
import Checkbox from 'react-native-paper/src/components/Checkbox/Checkbox'
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
                    '#e2e1df',
                    '#939393'
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
                            color='black'
                        />
                    )}
                />
            </Card.Content>
            </LinearGradient>
        </Card>
    )
};

export default ToDoItem