import { useQuery, gql } from "@apollo/client"

const GET_CHARACTERS = gql`
    query {
        characters {
            results {
                id
                name
                image
            }
        }
    }
`

export const useCharacters = () => {
    const {loading, data, error} = useQuery(GET_CHARACTERS)
    return {
        loading,
        data,
        error
    }
}