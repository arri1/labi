import {ApolloClient,InMemoryCache} from '@apollo/client'
import { onError } from 'apollo-link-error'
import { ApolloLink } from 'apollo-link'
import { setContext } from 'apollo-link-context'
import { createUploadLink } from 'apollo-upload-client'
import fetch from 'node-fetch'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Config from 'react-native-config'

const authLink = setContext(
    async (_, { headers }) => {
        let token
        if (typeof window !== 'undefined') {
            token = await AsyncStorage.getItem(
                'token'
            )
        }
        return {
            headers: {
                ...headers,
                authorization: token ? token : ''
            }
        }
    }
)

const errorLink = onError(
    ({ graphQLErrors, networkError }) => {
        if (graphQLErrors)
            graphQLErrors.map(
                ({ message, locations, path }) =>
                    console.error(
                        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
                    )
            )
        if (networkError)
            console.log(
                `[Network error]: ${networkError}`
            )
    }
)

const uploadLink = createUploadLink({
    uri: 'https://nefu-server.herokuapp.com',
    credentials: 'same-origin',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'X-Custom-Header': true
    },
    fetch
})

const link = ApolloLink.from([authLink, errorLink, uploadLink])

const apollo = new ApolloClient({
    link,
    cache: new InMemoryCache()
})

export default apollo