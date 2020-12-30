import gql from 'graphql-tag'
export const FIND_MANY_POST=gql`
    query {
        findManyPost{
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