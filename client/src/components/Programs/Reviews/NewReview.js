import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { ProgramContext } from "../../../context/programsContext";
import { UserContext } from "../../../context/userContext";
import StarRating from "./StarRating";

function NewReview() {
    const { id } = useParams()
    const {addReview} = useContext(ProgramContext)
    const {user} = useContext(UserContext)
    const [rating, setRating] = useState('')
    const [post, setPost] = useState('')


    function handleSubmit(e) {
        e.preventDefault();
        const review = {
            rating: rating,
            post: post,
            program_id: id,
            user_id: user.id
        }
        fetch('/reviews', {
            method: 'POST',
            body: JSON.stringify(review),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(newReview => addReview(newReview))
        console.log('new review added')
        setRating('')
        setPost('')
    };


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Write Review: </label>
                <select value={rating} onChange={(e) => setRating(e.target.value)}>
                    <option value="" disabled defaultValue hidden >
                        Select Overall Rating
                    </option>
                    <option>5</option>
                    <option>4</option>
                    <option>3</option>
                    <option>2</option>
                    <option>1</option>
                </select>
                {/* <StarRating /> */}
                <br />
                <textarea
                    required
                    cols="65"
                    rows="6"
                    value={post}
                    onChange={(e) => setPost(e.target.value)}
                />
                <br />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default NewReview
