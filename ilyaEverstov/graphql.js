import { gql } from '@apollo/client'

export const USER = gql`
    query {
        user {
            id
            name
            surname
            login
        }
    }
`

export const AUTH = gql`
    mutation($data: AuthUserInput!) {
        authUser(data: $data) {
            token
            user {
                id
                name
                surname
                login
            }
        }
    }
`
export const REG = gql`
    mutation($data: RegistrationUserInput!) {
        registerUser(data: $data) {
            token
            user {
                id
                name
                surname
                login
            }
        }
    }
`
export const UPDATE_USER = gql`
    mutation($data: UserUpdateInput!) {
        updateUser(data: $data) {
            id
            name
            surname
            login
        }
    }
` 
