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