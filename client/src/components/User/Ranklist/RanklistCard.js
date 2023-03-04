import React, { useState, useContext } from 'react'
import { UserContext } from '../../../context/userContext';
import EditRankCard from './EditRankCard';

function RanklistCard({ id, program_name, geographic, goodfit, reputation, personalities, qol, edu_training, comment, user_id, ranklist }) {
    const { deleteRanklist, editedRanklist } = useContext(UserContext)
    const [isEditing, setIsEditing] = useState(false);

    let deletedRanklist = { ranklist }

    function handleDeleteRanklist(e) {
        fetch(`/ranklists/${id}`, {
            method: 'DELETE'
        })
            .then(deleteRanklist(deletedRanklist))
    }

    function handleUpdateRanklist(updatedRanklist) {
        setIsEditing(false);
        editedRanklist(updatedRanklist);
    }

    return (
        <li>
            {isEditing ? (
                <EditRankCard
                    id={id}
                    user_id={user_id}
                    program_name={program_name}
                    geographic={geographic}
                    goodfit={goodfit}
                    reputation={reputation}
                    personalities={personalities}
                    qol={qol}
                    edu_training={edu_training}
                    comment={comment}
                    onRanklistEdit={handleUpdateRanklist}
                />
            ) : (
                <div>
                    <p hidden>{id}</p>
                    <p hidden>{user_id}</p>
                    <p>Program Name: {program_name}</p>
                    <p>Location: {geographic}</p>
                    <p>Goodfit: {goodfit}</p>
                    <p>Reputation: {reputation}</p>
                    <p>Personalities: {personalities}</p>
                    <p>Quality of Life: {qol}</p>
                    <p>Educational Training: {edu_training}</p>
                    <p>Comments: {comment}</p>
                    <button onClick={() => setIsEditing((isEditing) => !isEditing)}>
                        <span role="img" aria-label="edit">
                            📝EDIT
                        </span>
                    </button>
                    <button onClick={handleDeleteRanklist}>
                        <span role="img" aria-label="delete">
                            ❌DELETE
                        </span>
                    </button>
                </div>
            )}
        </li>
    )
}

export default RanklistCard
