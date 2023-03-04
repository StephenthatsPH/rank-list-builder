import React from 'react'

function RanklistCard({ program_name, geographic, goodfit, reputation, personalities, qol, edu_training, comment }) {
    
    return (
        <div>
            <p>Program Name: {program_name}</p>
            <p>Location: {geographic}</p>
            <p>Goodfit: {goodfit}</p>
            <p>Reputation: {reputation}</p>
            <p>Personalities: {personalities}</p>
            <p>Quality of Life: {qol}</p>
            <p>Educational Training: {edu_training}</p>
            <p>Comments: {comment}</p>
            <button >
                <span role="img" aria-label="edit">
                    📝EDIT
                </span>
            </button>
            <button >
                <span role="img" aria-label="delete">
                    ❌DELETE
                </span>
            </button>
        </div>
    )
}

export default RanklistCard
