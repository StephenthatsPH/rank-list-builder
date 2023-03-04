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
            <select value={ranklistGeographic} onChange={(e) => setRanklistGeographic(e.target.value)}>
                <option value="" disabled defaultValue hidden >
                    Select Rating
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
                    Select Rating
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
                    Select Rating
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
                    Select Rating
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
                    Select Rating
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
                    Select Rating
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

export default NewRankCard
