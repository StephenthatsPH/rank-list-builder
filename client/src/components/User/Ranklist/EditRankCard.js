import React, { useState } from "react";

function EditRankCard({ id, program_name, geographic, goodfit, reputation, personalities, qol, edu_training, comment, onRanklistEdit }) {
    const [ranklistGeographic, setRanklistGeographic] = useState(geographic);
    const [ranklistGoodfit, setRanklistGoodfit] = useState(goodfit);
    const [ranklistReputation, setRanklistReputation] = useState(reputation);
    const [ranklistPersonalities, setRanklistPersonalities] = useState(personalities);
    const [ranklistQol, setRanklistQol] = useState(qol);
    const [ranklistEdu_training, setRanklistEdu_training] = useState(edu_training);
    const [ranklistComment, setRanklistComment] = useState(comment);

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
            <select value={ranklistGeographic} onChange={(e) => setRanklistGeographic(e.target.value)}>
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
            <label>Goodfit: </label>
            <select value={ranklistGoodfit} onChange={(e) => setRanklistGoodfit(e.target.value)}>
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
            <label>Reputation: </label>
            <select value={ranklistReputation} onChange={(e) => setRanklistReputation(e.target.value)}>
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
            <label>Personalities: </label>
            <select value={ranklistPersonalities} onChange={(e) => setRanklistPersonalities(e.target.value)}>
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
            <label>Quality of Life: </label>
            <select value={ranklistQol} onChange={(e) => setRanklistQol(e.target.value)}>
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
            <label>Educational Training: </label>
            <select value={ranklistEdu_training} onChange={(e) => setRanklistEdu_training(e.target.value)}>
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
