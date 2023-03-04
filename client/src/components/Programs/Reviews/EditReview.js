import React, { useState } from "react";

function EditReview({ id, post, rating, onReviewEdit }) {
    const [reviewPost, setReviewPost] = useState(post);
    const [reviewRating, setReviewRating] = useState(rating);

    function handleEditSubmit(e) {
        e.preventDefault();
        fetch(`/reviews/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                rating: reviewRating,
                post: reviewPost
            }),
        })
            .then((res) => res.json())
            .then((updatedReview) => onReviewEdit(updatedReview));
    }
    return (
        <form onSubmit={handleEditSubmit}>
            <label>Editing Review:</label>
            <select value={reviewRating} onChange={(e) => setReviewRating(e.target.value)}>
                <option value="" disabled defaultValue hidden >
                    Select Overall Rating
                </option>
                <option>5</option>
                <option>4</option>
                <option>3</option>
                <option>2</option>
                <option>1</option>
            </select>
            <br />
            <textarea
                required
                cols="65"
                rows="6"
                value={reviewPost}
                onChange={(e) => setReviewPost(e.target.value)}
            />
            <button>
                <input
                    type="submit"
                    value="Submit"
                />
            </button>
        </form>
    );
}

export default EditReview;