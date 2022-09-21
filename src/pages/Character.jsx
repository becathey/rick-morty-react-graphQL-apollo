import React from "react"
import { useParams } from "react-router-dom"
import { useCharacter } from "../hooks/useCharacter"
import './Character.css'

export default function Character() {
    const {id} = useParams()
    const {data, loading, error} = useCharacter(id)

    if(error) return <h1>Oops! Something went wrong</h1>
    if(loading) return <h1>Loading ...</h1>

    return (
        <div className="character-container">
            <img src={data.character.image} width={350} height={350} />
            <div className="character-content">
                <h1>{data.character.name}</h1>
                <div className="character-episode">
                    {data.character.episode.map(episode => {
                        return (
                            <div key={episode.episode}>
                                {episode.name} (<b>{episode.episode}</b>)
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}