import React, { useContext } from 'react'
import { ProgramContext } from '../../../context/programsContext';

function ProgramNameSelect() {
    const { programs } = useContext(ProgramContext)
    return (
        <>
            {programs.map((program) => (<option key={program.id} value={program.name} >{program.name}</option>))}
        </>
    );
}

export default ProgramNameSelect
