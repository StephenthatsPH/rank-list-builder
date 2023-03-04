import React, { useEffect, useState } from 'react'

const ProgramContext = React.createContext();

const ProgramProvider = ({ children }) => {
    const [programs, setPrograms] = useState([])

    useEffect(() => {
        fetch('/programs')
            .then((res) => res.json())
            .then((data) =>{
                setPrograms(data);
                console.log(data)
            }) 
    }, []);

    function addReview(newReview) {
        const program = programs.find((program) => program.id == newReview.program_id)
        const updatedReviews = [...program.reviews, newReview]
        const updatedProgram = { ...program, reviews: updatedReviews }
        const updatedPrograms = programs.map((obj) => {
            if (obj.id === program.id) {
                return updatedProgram
            }
            else {
                return obj
            }
        })
        setPrograms(updatedPrograms)
    }

    function deleteReview(deletedReview) {
        const program = programs.find((program) => program.id == deletedReview.review.program_id)
        const updatedReviews = program.reviews.filter((r) => r.id !== deletedReview.review.id);
        const updatedProgram = { ...program, reviews: updatedReviews }
        const updatedPrograms = programs.map((obj) => {
            if (obj.id === program.id) {
                return updatedProgram
            }
            else {
                return obj
            }
        })
        setPrograms(updatedPrograms);
    }

    function editedReview(updatedReview) {
        const program = programs.find((program) => program.id == updatedReview.program_id)
        const updatedReviews = program.reviews.map((review) => {
            if (review.id === updatedReview.id) {
                return updatedReview;
            } else {
                return review;
            }
        });
        const updatedProgram = { ...program, reviews: updatedReviews }
        const updatedPrograms = programs.map((obj) => {
            if (obj.id === program.id) {
                return updatedProgram
            }
            else {
                return obj
            }
        })
        setPrograms(updatedPrograms);
    }

    return (
        <ProgramContext.Provider value={{ programs, setPrograms, addReview, deleteReview, editedReview }}>
            {children}
        </ProgramContext.Provider>
    )
}

export { ProgramContext, ProgramProvider }
