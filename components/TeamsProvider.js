'use client'

import {createContext, useContext, useEffect, useState} from "react";
import {nbaTeams} from "@/teams";


const TeamsContext = createContext();

// provider
export function TeamsContextProvider({children}) {
    const [teamKey, setTeamKey] = useState(0); // index of current team
    const [players, setPlayers] = useState([]); // all players
    const currentTeam = nbaTeams[teamKey]; // team object

    // changes current team and scroll to top
    const changeTeams = (x) => {
        setTeamKey(x);
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
    // fetch all players
    const fetchPlayers = async () => {
        try {
            const response = await fetch('https://api.balldontlie.io/v1/teams/<1>',{
                headers: {
                        Authorization: '33525086-feac-4d44-8b23-fed50c1e9f67'
                    }
                },
            );
            const data = await response.json();
            setPlayers(data.data);
        } catch (error) {
            console.error('Error fetching player data:', error);
        }
    };

    useEffect(() => {
        fetchPlayers();
    }, []);

    return (
        <TeamsContext.Provider value={{
            teamKey,
            setTeamKey,
            players,
            setPlayers,
            currentTeam,
            changeTeams,
        }}>
            {children}
        </TeamsContext.Provider>
    )
}

export const useTeamsContext = ()=> useContext(TeamsContext);