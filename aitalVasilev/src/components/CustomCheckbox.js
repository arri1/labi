import React, {
    Component,
    useContext
} from 'react'
import {
    View,
    TouchableOpacity
} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { AppContext } from '../styles/DynamicThemeProvider'

const CheckedBox = () => {
    const context = useContext(AppContext)
    return (
        <View
            style={{
                alignItems: 'center',
                justifyContent: 'center',
                padding: 10
            }}
        >
            <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                colors={[
                    context.theme.colors
                        .gradient1,
                    context.theme.colors.gradient2
                ]}
                style={{
                    height: 31,
                    width: 31,
                    borderRadius: 50,
                    backgroundColor: 'red',
                    shadowColor: '#000',
                    shadowOffset: {
                        width: 0,
                        height: 2
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: 3.84,

                    elevation: 5
                }}
            />
        </View>
    )
}

const UncheckedBox = () => {
    return (
        <View
            style={{
                alignItems: 'center',
                justifyContent: 'center',
                padding: 10
            }}
        >
            <View
                style={{
                    height: 31,
                    width: 31,
                    borderRadius: 50,
                    backgroundColor: 'white',
                    shadowColor: '#000',
                    shadowOffset: {
                        width: 0,
                        height: 2
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: 3.84,

                    elevation: 5
                }}
            />
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
