import React, { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { ProgramContext } from '../../../context/programsContext'
import ReviewCard from './ReviewCard';

function ReviewsList() {
    const [selectedProgram, setSelectedProgram] = useState({
        name: "",
        reviews: []
    });
    const { programs } = useContext(ProgramContext)
    const params = useParams()

    useEffect(() => {
        const selectedProgram = programs.find((program) => program.id === parseInt(params.id))
        if (selectedProgram) {
            setSelectedProgram(selectedProgram)
        }
    }, [programs, params.id]);

    const getReviews = selectedProgram.reviews.map((review) => {
        return <div className="review-preview" key={review.id}>
            <ReviewCard
                id={review.id}
                post={review.post}
                rating={review.rating}
                program_id={review.program_id}
                user_id={review.user_id}
                review={review}
            />
        </div>
    })

    return (
        <div className='trans-white'>
            <h3>Reviews of {selectedProgram.name}:</h3>
            <ul>
                {getReviews}
            </ul>
        </div>
    )
}

export default ReviewsList
