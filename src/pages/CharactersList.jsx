import React from "react"
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

export default function CharactersList() {
    const {loading, data, error} = useQuery(GET_CHARACTERS)
    console.log({loading, data, error})

    return (
        <h1>Characters List</h1>
        
    )
}