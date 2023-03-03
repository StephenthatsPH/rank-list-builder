import React, { useEffect, useState } from 'react'

const ReviewContext = React.createContext();

const ReviewProvider = ({ children }) => {
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch('/reviews')
            .then((res) => res.json())
            .then((data) =>{
                setReviews(data);
                console.log(data)
            }) 
    }, []);

    return (
        <ReviewContext.Provider value={{ reviews, setReviews }}>
            {children}
        </ReviewContext.Provider>
    )
}

export { ReviewContext, ReviewProvider }
