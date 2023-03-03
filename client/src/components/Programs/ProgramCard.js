import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { ProgramContext } from '../../context/programsContext'

function ProgramCard() {
    const { programs } = useContext(ProgramContext)
    const { id } = useParams()

    return <div key={id}>
        {programs.map((program) => {
            if (program.id == id) {
                return <div key={id}>
                    <h1>{program.name}</h1>
                    <h4>{program.address}</h4>
                    <h4>{program.website}</h4>
                    <h4>PGY1 Salary: ${program.pgy1salary}</h4>
                    <h4>{program.specialty}</h4>
                    <h4>Program Size: {program.program_size}</h4>
                    <h4>Program Age: {program.program_age}</h4>
                    <h3>Location Details</h3>
                    <ul>
                        <li>State: {program.state}</li>
                        <li>City: {program.city}</li>
                        <li>Area: {program.area_type}</li>
                    </ul>
                </div>
            }
        })}
    </div>
}

export default ProgramCard;
