import React, { useState } from "react";

function EditRankCard({ id, program_name, geographic, goodfit, reputation, personalities, qol, edu_training, comment, onRanklistEdit }) {
    const [ranklistGeographic, setRanklistGeographic] = useState(geographic);
    const [ranklistGoodfit, setRanklistGoodfit] = useState(goodfit);
    const [ranklistReputation, setRanklistReputation] = useState(reputation);
    const [ranklistPersonalities, setRanklistPersonalities] = useState(personalities);
    const [ranklistQol, setRanklistQol] = useState(qol);
    const [ranklistEdu_training, setRanklistEdu_training] = useState(edu_training);
    const [ranklistComment, setRanklistComment] = useState(comment);
    const [hoverGeo, setHoverGeo] = useState(0);
    const [hoverGood, setHoverGood] = useState(0);
    const [hoverRep, setHoverRep] = useState(0);
    const [hoverPer, setHoverPer] = useState(0);
    const [hoverQol, setHoverQol] = useState(0);
    const [hoverEdu, setHoverEdu] = useState(0);

    function handleEditSubmit(e) {
        e.preventDefault();
        fetch(`/ranklists/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                geographic: ranklistGeographic,
                goodfit: ranklistGoodfit,
                reputation: ranklistReputation,
                personalities: ranklistPersonalities,
                qol: ranklistQol,
                edu_training: ranklistEdu_training,
                comment: ranklistComment,
            }),
        })
            .then((res) => res.json())
            .then((updatedRanklist) => onRanklistEdit(updatedRanklist));
    }

    return (
        <form onSubmit={handleEditSubmit}>
            <label>Editing Rank for {program_name}:</label>
            <br />
            <label>Location: </label>
            <div className="star-rating">
                {[...Array(5)].map((star, index) => {
                    index += 1;
                    return (
                        <button
                            type="button"
                            key={index}
                            className={index <= (hoverGeo || ranklistGeographic) ? "on" : "off"}
                            onClick={() => setRanklistGeographic(index)}
                            value={ranklistGeographic}
                            onMouseEnter={() => setHoverGeo(index)}
                            onMouseLeave={() => setHoverGeo(ranklistGeographic)}
                        >
                            <span className="star">&#9733;</span>
                        </button>
                    );
                })}
            </div>
            <label>Goodfit: </label>
            <div className="star-rating">
                {[...Array(5)].map((star, index) => {
                    index += 1;
                    return (
                        <button
                            type="button"
                            key={index}
                            className={index <= (hoverGood || ranklistGoodfit) ? "on" : "off"}
                            onClick={() => setRanklistGoodfit(index)}
                            value={ranklistGoodfit}
                            onMouseEnter={() => setHoverGood(index)}
                            onMouseLeave={() => setHoverGood(ranklistGoodfit)}
                        >
                            <span className="star">&#9733;</span>
                        </button>
                    );
                })}
            </div>
            <label>Reputation: </label>
            <div className="star-rating">
                {[...Array(5)].map((star, index) => {
                    index += 1;
                    return (
                        <button
                            type="button"
                            key={index}
                            className={index <= (hoverRep || ranklistReputation) ? "on" : "off"}
                            onClick={() => setRanklistReputation(index)}
                            value={ranklistReputation}
                            onMouseEnter={() => setHoverRep(index)}
                            onMouseLeave={() => setHoverRep(ranklistReputation)}
                        >
                            <span className="star">&#9733;</span>
                        </button>
                    );
                })}
            </div>
            <label>Personalities: </label>
            <div className="star-rating">
                {[...Array(5)].map((star, index) => {
                    index += 1;
                    return (
                        <button
                            type="button"
                            key={index}
                            className={index <= (hoverPer || ranklistPersonalities) ? "on" : "off"}
                            onClick={() => setRanklistPersonalities(index)}
                            value={ranklistPersonalities}
                            onMouseEnter={() => setHoverPer(index)}
                            onMouseLeave={() => setHoverPer(ranklistPersonalities)}
                        >
                            <span className="star">&#9733;</span>
                        </button>
                    );
                })}
            </div>
            <label>Quality of Life: </label>
            <div className="star-rating">
                {[...Array(5)].map((star, index) => {
                    index += 1;
                    return (
                        <button
                            type="button"
                            key={index}
                            className={index <= (hoverQol || ranklistQol) ? "on" : "off"}
                            onClick={() => setRanklistQol(index)}
                            value={ranklistQol}
                            onMouseEnter={() => setHoverQol(index)}
                            onMouseLeave={() => setHoverQol(ranklistQol)}
                        >
                            <span className="star">&#9733;</span>
                        </button>
                    );
                })}
            </div>
            <label>Educational Training: </label>
            <div className="star-rating">
                {[...Array(5)].map((star, index) => {
                    index += 1;
                    return (
                        <button
                            type="button"
                            key={index}
                            className={index <= (hoverEdu || ranklistEdu_training) ? "on" : "off"}
                            onClick={() => setRanklistEdu_training(index)}
                            value={ranklistEdu_training}
                            onMouseEnter={() => setHoverEdu(index)}
                            onMouseLeave={() => setHoverEdu(ranklistEdu_training)}
                        >
                            <span className="star">&#9733;</span>
                        </button>
                    );
                })}
            </div>
            <label>Comments: </label>
            <br />
            <textarea
                required
                cols="65"
                rows="6"
                value={ranklistComment}
                onChange={(e) => setRanklistComment(e.target.value)}
            />
            <button>
                <input
                    type="submit"
                    value="Submit"
                />
            </button>
        </form>
    )
}

export default EditRankCard
