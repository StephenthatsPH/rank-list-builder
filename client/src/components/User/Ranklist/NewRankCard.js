import React, { useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "../../../context/userContext";
import ProgramNameSelect from "./ProgramNameSelect";

function NewRankCard({ setIsShow, isShow }) {
    const { id } = useParams()
    const { users, addRanklist } = useContext(UserContext)
    const [ranklistGeographic, setRanklistGeographic] = useState('');
    const [ranklistGoodfit, setRanklistGoodfit] = useState('');
    const [ranklistReputation, setRanklistReputation] = useState('');
    const [ranklistPersonalities, setRanklistPersonalities] = useState('');
    const [ranklistQol, setRanklistQol] = useState('');
    const [ranklistEdu_training, setRanklistEdu_training] = useState('');
    const [ranklistComment, setRanklistComment] = useState('');
    const [ranklistProgram_name, setRanklistProgram_name] = useState('');
    const [hoverGeo, setHoverGeo] = useState(0);
    const [hoverGood, setHoverGood] = useState(0);
    const [hoverRep, setHoverRep] = useState(0);
    const [hoverPer, setHoverPer] = useState(0);
    const [hoverQol, setHoverQol] = useState(0);
    const [hoverEdu, setHoverEdu] = useState(0);

    function handleSubmit(e) {
        e.preventDefault();
        fetch(`/ranklists`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                program_name: ranklistProgram_name,
                geographic: ranklistGeographic,
                goodfit: ranklistGoodfit,
                reputation: ranklistReputation,
                personalities: ranklistPersonalities,
                qol: ranklistQol,
                edu_training: ranklistEdu_training,
                overall_rating: getOverall,
                comment: ranklistComment,
                user_id: users.id
            }),
        })
            .then((res) => res.json())
            .then((newRanklist) => addRanklist(newRanklist));
        setRanklistComment('')
        setRanklistEdu_training('')
        setRanklistGeographic('')
        setRanklistGoodfit('')
        setRanklistPersonalities('')
        setRanklistProgram_name('')
        setRanklistQol('')
        setRanklistReputation('')
        setIsShow(!isShow)
    }

    const getOverall = (ranklistGeographic + ranklistEdu_training + ranklistGoodfit + ranklistPersonalities + ranklistQol + ranklistReputation)

    return (
        <form onSubmit={handleSubmit}>
            <h3>Add new program: </h3>
            <label>Program:</label>
            <select value={ranklistProgram_name} onChange={(e) => setRanklistProgram_name(e.target.value)}>
                <option value="" disabled defaultValue hidden >
                    Select Program
                </option>
                <ProgramNameSelect />
            </select>
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
            <button onClick={getOverall}>
                <input
                    type="submit"
                    value="Submit"
                />
            </button>
        </form>
    )
}

export default NewRankCard