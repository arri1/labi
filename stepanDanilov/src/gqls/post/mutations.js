import gql from 'graphql-tag'

export const CREATE_ONE_POST = gql`
    mutation ($data:PostCreateInput!){
        createOnePost(data: $data){
            id
            title
            text
            user{
                id
                name
            }
        }
    }
`