import React, { useEffect, useState } from 'react'

const RankListContext = React.createContext();

const RankListProvider = ({ children }) => {
    const [rankLists, setRankLists] = useState([])

    useEffect(() => {
        fetch('/rankLists')
            .then((res) => res.json())
            .then((data) =>{
                setRankLists(data);
                console.log(data)
            }) 
    }, []);

    return (
        <RankListContext.Provider value={{ rankLists, setRankLists }}>
            {children}
        </RankListContext.Provider>
    )
}

export { RankListContext, RankListProvider }