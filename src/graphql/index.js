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

export const createOauthCreds = gql`
    mutation createOauthCreds($service: String!,$user_id: Int!,$refresh_token: String!,$access_token: String!){
        createOauthCreds(service: $service,user_id: $user_id,refresh_token: $refresh_token,access_token: $access_token)
    }
`;