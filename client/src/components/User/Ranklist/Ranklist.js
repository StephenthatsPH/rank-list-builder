import React, { useContext } from 'react'
import { useParams } from 'react-router-dom';
import { UserContext } from '../../../context/userContext'
import RanklistCard from './RanklistCard';

function Ranklist() {
    const { user } = useContext(UserContext)
    const params = useParams()

    const getRanklists = user.ranklists.map((ranklist) => {
        return <div className="ranklist-preview" key={ranklist.id}>
            <RanklistCard
                id={ranklist.id}
                program_name={ranklist.program_name}
                geographic={ranklist.geographic}
                goodfit={ranklist.goodfit}
                reputation={ranklist.reputation}
                personalities={ranklist.personalities}
                qol={ranklist.qol}
                edu_training={ranklist.edu_training}
                comment={ranklist.comment}
            />
        </div>
    })

    return (
        <div>
            <h1>{user.first_name}'s rank list</h1>
            {getRanklists}
        </div>
    )
}

export default Ranklist
