import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ProgramContext } from '../../context/programsContext'
import { HospitalContext } from '../../context/hospitalsContext'

function ProgramsPage() {
    const { programs } = useContext(ProgramContext)
    const { hospitals } = useContext(HospitalContext)


    const getHospitals = hospitals.map((hospital) => {
        return <ul>
            <li key={hospital.id}>
            <h2>{hospital.name}</h2>
            {programs.map((program) => {
                if (program.hospital_id === hospital.id) {
                    return <ul>
                        <li key={program.id}>
                            <h3>{program.specialty}</h3>
                            <Link to={`/programs/${program.id}/overview`} >
                                <p>More info on {program.name}'s {program.specialty} program.</p>
                            </Link>
                        </li>
                    </ul>
                }
            })}
        </li>
        </ul>
    })

    return (
        <div>
            <h1>Programs</h1>
            <p>List of programs base on specialty</p>
            {getHospitals}
        </div>
    )
}

export default ProgramsPage
