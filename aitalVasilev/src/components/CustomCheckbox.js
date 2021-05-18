import React, {
    Component,
    useContext
} from 'react'
import {
    View,
    TouchableOpacity
} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
// Icons
import Icon from 'react-native-vector-icons/MaterialIcons'
// styling
import styles from '../styles/styles'
// Custom components
import { AppContext } from '../styles/DynamicThemeProvider'

const CheckedBox = () => {
    const context = useContext(AppContext)
    return (
        <View style={styles.checkboxContainer}>
            <Icon
                style={styles.checkmark}
                size={31}
                color="white"
                name="check"
            />
            <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                colors={[
                    context.theme.colors
                        .gradient1,
                    context.theme.colors.gradient2
                ]}
                style={styles.checkbox}
            />
        </View>
    )
}

const UncheckedBox = () => {
    return (
        <View style={styles.checkboxContainer}>
            <View style={styles.checkbox} />
        </View>
    )
}

export default class CheckBox extends Component {
    constructor(props) {
        super(props)
        this.state = { isCheck: props.status }
    }

    render() {
        return (
            <TouchableOpacity
                onPress={() => {
                    this.props.onPress()
                }}
                style={this.props.style}
            >
                {this.props.status ==
                'checked' ? (
                    <CheckedBox />
                ) : (
                    <UncheckedBox />
                )}
            </TouchableOpacity>
        )
    }
}
