import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { ReviewContext } from "../../../context/reviewsContext";
import StarRating from "./StarRating";

function NewReview() {
    const { id } = useParams()
    const {reviews} = useContext(ReviewContext)


    function handleSubmit(e) {
        e.preventDefault();
        const review = {
            // rating: rating,
            // text: text,
            // program_id: id,
            // user_id: user_id
        }
        fetch('/reviews', {
            method: 'POST',
            body: JSON.stringify(review),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(newReview => console.log(newReview))
        console.log('new review added')
        // setRating('')
        // setText('')
    };


    return (
        <div>
            <h2>Post new Review</h2>
            <form onSubmit={handleSubmit}>
                <label>Write Review: </label>
                <select value={0} onChange={(e) => console.log(e.target.value)}>
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
                    value={''}
                    onChange={(e) => console.log(e.target.value)}
                />
                <br />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default NewReview
