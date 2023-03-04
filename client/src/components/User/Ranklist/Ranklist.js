import React, { useState, useContext } from 'react'
import { useParams } from 'react-router-dom';
import { UserContext } from '../../../context/userContext'
import NewRankCard from './NewRankCard';
import RanklistCard from './RanklistCard';

function Ranklist() {
    const { users } = useContext(UserContext)
    const [isShow, setIsShow] = useState(false);

    const getRanklists = users.ranklists.map((ranklist) => {
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
                user_id={ranklist.user_id}
                ranklist={ranklist}
            />
        </div>
    })

    return (
        <div>
            <h1>{users.first_name}'s rank list</h1>
            {isShow ? (
                <>
                    <NewRankCard setIsShow={setIsShow} isShow={isShow} />
                    <button onClick={() => setIsShow((isShow) => !isShow)}>
                        <span role="img" aria-label="edit">
                            ❌ Cancel
                        </span>
                    </button>
                </>
            ) : (

                <button onClick={() => setIsShow((isShow) => !isShow)}>
                    <span role="img" aria-label="edit">
                        📝Add Program
                    </span>
                </button>

            )}
            <ul>
                {getRanklists}
            </ul>
        </div>
    )
}

export default Ranklist
