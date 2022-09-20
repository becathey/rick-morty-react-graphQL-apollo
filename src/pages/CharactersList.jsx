import React from "react"
import { useCharacters } from "../hooks/useCharacters"
import './CharactersList.css'

export default function CharactersList() {
    const {loading, data, error} = useCharacters()
    console.log({loading, data, error})
    if (loading) return <h1>Loading ...</h1>
    if (error) return <h1>Oops! Something went wrong.</h1>

    return (
        <>
            <h1>Rick and Morty Character List</h1>
            <div className="character-list">
                {data.characters.results.map(character => {
                    return (
                        <div className="character" key={character.id}>
                            <img src={character.image} className="character-image" />
                            <h2 className="character-name">{character.name}</h2>
                        </div>
                    )
                })}
            </div>
        </>
    )
}