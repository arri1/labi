import React, { Component } from 'react'
import { Provider as PaperProvider } from 'react-native-paper'
import { themePrimary } from './theme'

const Context = React.createContext()

class DynamicThemeProvider extends Component {
    state = {
        theme: themePrimary,
        updateTheme: (theme) => {
            this.setState({ theme: theme })
        }
    }

    render() {
        const { theme } = this.state
        return (
            <Context.Provider value={this.state}>
                <PaperProvider theme={theme}>
                    {this.props.children}
                </PaperProvider>
            </Context.Provider>
        )
    }
}

export default DynamicThemeProvider
export const AppConsumer = Context.Consumer
export const AppContext = Context
