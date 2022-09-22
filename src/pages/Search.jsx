import React, { useState } from "react"
import { gql, useLazyQuery } from "@apollo/client"

const GET_CHARACTER_LOCATIONS = gql`
    query GetCharacterLocations($name: String) {
        characters(filter: {
            name: $name
        }) {
            results {
                location {
                    name
                }
            }
        }
    }
`

export default function Search() {
    const [name, setName] = useState('')
    const [getLocations, {loading, error, data, called}] = useLazyQuery(GET_CHARACTER_LOCATIONS, {
        variables: {
            name
        }
    })

    return (
        <div>
            <input value={name} onChange={(e) => setName(e.target.value)} />
            <button onClick={() => getLocations()}>Search</button>
            {loading && <h1>Loading ...</h1>}
            {error && <h1>Oops! Something went wrong.</h1>}
            {data && (
                <ul>
                    {data.characters.results.map((character, i) => {
                        return (
                            <li key={i}>{character.location.name}</li>
                        )
                    })}
                </ul>
            )}
        </div>
    )
}