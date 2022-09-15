import React from "react"
import { useQuery, gql } from "@apollo/client"
import './CharactersList.css'

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
    if (loading) return <h1>Loading ...</h1>
    if (error) return <h1>Oops! Something went wrong.</h1>

    return (
        <>
            <h1>Rick and Morty Character List</h1>
            <div className="character-list">
                {data.characters.results.map(character => {
                    return (
                        <div className="character">
                            <img src={character.image} className="character-image" />
                            <h2 className="character-name">{character.name}</h2>
                        </div>
                    )
                })}
            </div>
        </>
    )
}