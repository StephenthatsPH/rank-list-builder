import React, { useContext, useState } from "react";
import EditReview from "./EditReview"
import { UserContext } from "../../../context/userContext";
import { ProgramContext } from "../../../context/programsContext";

function ReviewCard({ id, post, rating, program_id, user_id, review }) {
    const {user} = useContext(UserContext)
    const {deleteReview, editedReview} = useContext(ProgramContext)
    const [isEditing, setIsEditing] = useState(false);

    let deletedReview = { review }

    function handleDeleteReview(e) {
        fetch(`/reviews/${id}`, {
            method: 'DELETE'
        })
        .then(deleteReview(deletedReview))
    }

    function handleUpdateReview(updatedReview) {
        setIsEditing(false);
        editedReview(updatedReview);
    }
    if (user.id == user_id) {
        return (
            <li>
                {isEditing ? (
                    <EditReview
                        user_id={user_id}
                        id={id}
                        post={post}
                        rating={rating}
                        onReviewEdit={handleUpdateReview}
                    />
                ) : (
                    <div>
                        <p hidden>{user_id}</p>
                        <h3>Rating: {rating}</h3>
                        <p>{post}</p>
                        <p hidden>{program_id} </p>
                        <button onClick={() => setIsEditing((isEditing) => !isEditing)}>
                            <span role="img" aria-label="edit">
                                📝EDIT
                            </span>
                        </button>
                        <button onClick={handleDeleteReview}>
                            <span role="img" aria-label="delete">
                                ❌DELETE
                            </span>
                        </button>

                    </div>
                )}
            </li>
        )
    } else {
        return (
            <div>
                <p hidden>{user_id}</p>
                <h3>Rating: {rating}</h3>
                <p>{post}</p>
                <p hidden>{program_id} </p>
            </div>
        )
    }
}

export default ReviewCard
