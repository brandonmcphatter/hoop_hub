'use client'

import {createContext, useContext, useEffect, useState} from "react";
import {nbaTeams} from "@/teams";
import {ballDontLie, API_KEY} from '@/ballDontLie';
import {redirect} from "next/navigation";

const TeamsContext = createContext();

// provider
export function TeamsContextProvider({children}) {
    const [isLoading, setIsLoading] = useState(false);
    const [activeTeam, setActiveTeam] = useState(0);
    const [teamKey, setTeamKey] = useState(activeTeam); // index of current team
    const [players, setPlayers] = useState([]); // all players
    const currentTeam = nbaTeams[teamKey]; // team object

    const changeTeams = (x) => {
        setTeamKey(x);
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    const goToTeam = (x)=> {
        redirect('/teams');
        setActiveTeam(x);
    }

    // fetch all players



    return (
        <TeamsContext.Provider value={{
            teamKey,
            setTeamKey,
            players,
            setPlayers,
            currentTeam,
            changeTeams,
            goToTeam
        }}>
            {children}
        </TeamsContext.Provider>
    )
}

export const useTeamsContext = ()=> useContext(TeamsContext);