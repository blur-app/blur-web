import gql from 'graphql-tag';

export const getUsers = gql`
    {
        getUsers {
            username,
            first_name,
            last_name
        }
    }
`;


export const getAllPosts = gql`
    {
        getAllPosts {
            user_id
            host
            source
        }
    }
`;


export const getUser = gql`
    query getUser($user_id: Int!){
        getUser(user_id: $user_id) {
            username,
            first_name,
            last_name,
            user_id
        }
    }
`;


export const createOauthCreds = gql`
    mutation createOauthCreds($service: String!,$user_id: Int!,$refresh_token: String!,$access_token: String!){
        createOauthCreds(service: $service,user_id: $user_id,refresh_token: $refresh_token,access_token: $access_token)
    }
`;

export const createUser = gql`
    mutation createUser($username: String!, $password_hash: String!, $first_name: String!, $last_name: String!, $email: String!){
        createUser(username: $username, password_hash: $password_hash, first_name: $first_name, last_name: $last_name, email: $email)
    }
`;

export const authUser = gql`
    mutation authUser($username: String!, $password_hash: String!){
        authUser(username: $username, password_hash: $password_hash) {
            username
            user_id
        }
    }
`;